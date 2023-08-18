import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(i => (
        <li className="item" key={i.id}>
          <Friend avatar={i.avatar} name={i.name} isOnline={i.isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
