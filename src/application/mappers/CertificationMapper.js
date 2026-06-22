import { Certification } from '../../domain/entities/Certification';

export class CertificationMapper {
  static toEntity(raw) {
    return new Certification({
      id: raw.id,
      title: raw.title,
      issuer: raw.issuer,
      date: raw.date,
      url: raw.url ?? null,
    });
  }

  static toEntityList(rawList) {
    return (rawList ?? []).map(CertificationMapper.toEntity);
  }
}
