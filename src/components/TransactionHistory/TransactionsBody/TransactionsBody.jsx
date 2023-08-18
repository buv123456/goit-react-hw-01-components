import { TransactionsItem } from '../TransactionsItem/TransactionsItem';

export function TransactionsBody({ items }) {
  return (
    <tbody>
      {items.map(i => (
        <tr key={i.id}>
          <TransactionsItem item={i} />
        </tr>
      ))}
    </tbody>
  );
}
