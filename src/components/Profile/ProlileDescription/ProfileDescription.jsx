// import { Description } from "./ProfileDescription.styled";
import PropTypes from 'prop-types';

export function ProfileDescription({
  user: { avatar, username, tag, location },
}) {
  return (
    <div>
      <img src={avatar} alt={username} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}

ProfileDescription.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
