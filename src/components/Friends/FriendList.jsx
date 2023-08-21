import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';
import { List, ListItem } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(i => (
        <ListItem key={i.id}>
          <Friend avatar={i.avatar} name={i.name} isOnline={i.isOnline} />
        </ListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
