import { error } from '@sveltejs/kit';
import { allSkills, skill } from '#lib/server/skills.js';

export function entries() {
  return allSkills().map(({ name }) => ({ name }));
}

export function load({ params }) {
  const found = skill(params.name);
  if (!found) error(404, `No skill named "${params.name}"`);
  return found;
}
