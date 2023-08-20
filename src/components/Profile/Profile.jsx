import { Card } from './Profile.styled';
import { ProfileDescription } from 'components/Profile/ProlileDescription/ProfileDescription';
import { ProfileSocialList } from 'components/Profile/ProfileList/ProfileList';

export function Profile({ user }) {
  return (
    <Card>
      <ProfileDescription user={user} />
      <ProfileSocialList stats={user.stats} />
    </Card>
  );
}
