import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Locat,
  Name,
  Tag,
} from './ProfileDescription.styled';

export function ProfileDescription({
  user: { avatar, username, tag, location },
}) {
  return (
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Locat>{location}</Locat>
    </Description>
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
