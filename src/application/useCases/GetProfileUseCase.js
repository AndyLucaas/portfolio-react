import { ProfileMapper } from '../mappers/ProfileMapper';

/**
 * GetProfileUseCase — orchestrates fetching and mapping the Profile entity.
 * Depends only on the repository abstraction injected at call time.
 */
export class GetProfileUseCase {
  constructor(profileRepository) {
    this.profileRepository = profileRepository;
  }

  execute(locale) {
    const raw = this.profileRepository.getProfile(locale);
    return ProfileMapper.toEntity(raw);
  }
}
