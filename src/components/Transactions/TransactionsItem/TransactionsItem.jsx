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
