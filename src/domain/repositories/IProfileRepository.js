/**
 * IProfileRepository — contract that any data source for the Profile
 * entity must respect. The domain layer never knows where data comes from.
 */
export class IProfileRepository {
  // eslint-disable-next-line no-unused-vars
  getProfile(locale) {
    throw new Error('IProfileRepository.getProfile must be implemented');
  }
}
