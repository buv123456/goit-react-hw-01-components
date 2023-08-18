import { ProfileCard } from './Profile.styled';
import { ProfileDescription } from 'components/Profile/ProlileDescription/ProfileDescription';
import { ProfileSocialList } from 'components/Profile/ProfileSocialList/ProfileSocialList';

export function Profile({ user }) {
  return (
    <ProfileCard className="profile">
      <ProfileDescription user={user} />
      <ProfileSocialList stats={user.stats} />
    </ProfileCard>
  );
}
