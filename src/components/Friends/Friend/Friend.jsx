export function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status" color={isOnline ? 'green' : 'red'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}
