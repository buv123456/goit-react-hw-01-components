import PropTypes from 'prop-types';
import { TransactionsBody } from './TransactionsBody/TransactionsBody';
import { TransactionsHead } from './TransactionsHead/TransactionsHead';
import { Table } from './Transactions.slyled';

export function Transactions({ transactions }) {
  return (
    <Table>
      <TransactionsHead />
      <TransactionsBody items={transactions} />
    </Table>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
