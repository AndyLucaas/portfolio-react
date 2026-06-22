/**
 * groupSkillsByCategory — pure presentation helper that groups a flat
 * Skill entity list into { category, skills[] } buckets, preserving
 * the order in which categories first appear in the source data.
 */
export function groupSkillsByCategory(skills) {
  const order = [];
  const map = new Map();

  skills.forEach((skill) => {
    if (!map.has(skill.category)) {
      map.set(skill.category, []);
      order.push(skill.category);
    }
    map.get(skill.category).push(skill);
  });

  return order.map((category) => ({ category, skills: map.get(category) }));
}
