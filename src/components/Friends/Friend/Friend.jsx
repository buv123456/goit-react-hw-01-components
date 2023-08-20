import { Mark } from './Friend.styled';

export function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <Mark color={isOnline ? 'green' : 'red'}></Mark>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}
