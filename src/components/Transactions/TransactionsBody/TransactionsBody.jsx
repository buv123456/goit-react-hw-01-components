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
