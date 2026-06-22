import { Profile } from '../../domain/entities/Profile';
import { SocialLink } from '../../domain/entities/SocialLink';
import { Language } from '../../domain/entities/Language';

export class ProfileMapper {
  static toEntity(raw) {
    return new Profile({
      fullName: raw.fullName,
      title: raw.title,
      summary: raw.summary,
      email: raw.email,
      phone: raw.phone,
      location: raw.location,
      resumeUrl: raw.resumeUrl ?? null,
      socialLinks: (raw.socialLinks ?? []).map(
        (link) => new SocialLink({ id: link.id, label: link.label, url: link.url, icon: link.icon })
      ),
      languages: (raw.languages ?? []).map(
        (lang) => new Language({ id: lang.id, name: lang.name, level: lang.level })
      ),
    });
  }
}
