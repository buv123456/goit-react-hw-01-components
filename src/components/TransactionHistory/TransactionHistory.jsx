import PropTypes from 'prop-types';
import { TransactionsBody } from './TransactionsBody/TransactionsBody';
import { TransactionsHead } from './TransactionsHead/TransactionsHead';

export function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <TransactionsHead />
      <TransactionsBody items={transactions} />
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
