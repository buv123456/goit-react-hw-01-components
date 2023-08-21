import PropTypes from 'prop-types';
import { capitalCase } from 'change-case';

export function TransactionsItem({ item }) {
  return (
    <>
      <td>{capitalCase(item.type)}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
  );
}

TransactionsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
