import PropTypes from 'prop-types';
import { Avatar, Mark } from './Friend.styled';

export function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <Mark color={isOnline ? 'green' : 'red'}></Mark>
      <Avatar src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}.isRequired;
