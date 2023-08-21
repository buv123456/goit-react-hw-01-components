import PropTypes from 'prop-types';
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

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
