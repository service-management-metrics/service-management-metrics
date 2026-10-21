import { allSkills } from '#lib/server/skills.js';

export function load() {
  return { skills: allSkills() };
}
