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
