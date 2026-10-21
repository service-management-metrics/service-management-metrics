// Server-only access to the AI skills (skills/<name>/SKILL.md in the monorepo).

import { parse, type Document } from '#lib/markdown.js';

const skillFiles = import.meta.glob('../../content/skills/*/SKILL.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

export type Skill = { name: string; description: string };

/** Split `---` front matter from the body; description may be quoted or a plain line. */
function frontMatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^["']|["']$/g, '').trim();
  }
  return { meta, body: match[2] };
}

const skills = new Map<string, { skill: Skill; body: string }>();
for (const [path, raw] of Object.entries(skillFiles)) {
  const dir = path.match(/\/skills\/([^/]+)\/SKILL\.md$/)![1];
  const { meta, body } = frontMatter(raw);
  skills.set(dir, { skill: { name: dir, description: meta.description ?? '' }, body });
}

/** Every skill, alphabetically. */
export function allSkills(): Skill[] {
  return [...skills.values()].map((s) => s.skill).sort((a, b) => a.name.localeCompare(b.name));
}

/** One skill with its body rendered, or `null` if unknown. */
export function skill(name: string): { skill: Skill; doc: Document } | null {
  const found = skills.get(name);
  return found ? { skill: found.skill, doc: parse(found.body) } : null;
}
