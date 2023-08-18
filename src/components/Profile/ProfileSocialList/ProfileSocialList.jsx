import PropTypes from 'prop-types';
import { capitalCase } from 'change-case';
import { ProfileSocialItem } from 'components/Profile/ProfileSocialItem/ProfiSocialItem';

export function ProfileSocialList({ stats }) {
  return (
    <ul className="stats">
      {Object.entries(stats).map((item, i) => (
        <li key={item[0]}>
          <ProfileSocialItem info={capitalCase(item[0])} quantity={item[1]} />
        </li>
      ))}
    </ul>
  );
}

ProfileSocialList.propTypes = {
  stats: PropTypes.object.isRequired,
};
