import PropTypes from 'prop-types';

export function ProfileSocialItem({ info, quantity }) {
  console.dir(quantity);
  return (
    <>
      <span className="label">{info}</span>
      <span className="quantity">{quantity}</span>
    </>
  );
}

ProfileSocialItem.propTypes = {
  info: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
