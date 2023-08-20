import PropTypes from 'prop-types';
import { capitalCase } from 'change-case';
import { Item, List } from './ProfileList.styled';
import { ProfileListItem } from '../ProfileListItem/ProfileListItem';

export function ProfileSocialList({ stats }) {
  return (
    <List>
      {Object.entries(stats).map((item, i) => (
        <Item key={item[0]}>
          <ProfileListItem info={capitalCase(item[0])} quantity={item[1]} />
        </Item>
      ))}
    </List>
  );
}

ProfileSocialList.propTypes = {
  stats: PropTypes.object.isRequired,
};
