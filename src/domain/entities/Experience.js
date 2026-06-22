/**
 * Experience entity — a professional or internship experience.
 */
export class Experience {
  constructor({ id, role, organization, period, responsibilities = [], location = null }) {
    this.id = id;
    this.role = role;
    this.organization = organization;
    this.period = period; // { start, end } as display strings
    this.responsibilities = responsibilities;
    this.location = location;
  }
}
