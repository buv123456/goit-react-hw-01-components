import PropTypes from 'prop-types';
import { TransactionsItem } from '../TransactionsItem/TransactionsItem';
import { TableRow } from './TransactionsBody.styled';

export function TransactionsBody({ items }) {
  return (
    <tbody>
      {items.map((i, idx) => (
        <TableRow key={i.id} id={idx}>
          <TransactionsItem item={i} />
        </TableRow>
      ))}
    </tbody>
  );
}

TransactionsBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
