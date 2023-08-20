import PropTypes from 'prop-types';
import { Info, Quantity } from './ProfileListItem.styled';

export function ProfileListItem({ info, quantity }) {
  return (
    <>
      <Info>{info}</Info>
      <Quantity>{quantity.toLocaleString('en-US')}</Quantity>
    </>
  );
}

ProfileListItem.propTypes = {
  info: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
