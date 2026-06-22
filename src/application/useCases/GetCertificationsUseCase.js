import { CertificationMapper } from '../mappers/CertificationMapper';

export class GetCertificationsUseCase {
  constructor(certificationRepository) {
    this.certificationRepository = certificationRepository;
  }

  execute(locale) {
    const raw = this.certificationRepository.getCertifications(locale);
    return CertificationMapper.toEntityList(raw);
  }
}
