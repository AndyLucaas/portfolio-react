/**
 * Education entity — an academic qualification.
 */
export class Education {
  constructor({ id, degree, institution, period }) {
    this.id = id;
    this.degree = degree;
    this.institution = institution;
    this.period = period; // { start, end } as display strings
  }
}
