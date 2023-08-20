import { TableHead } from './TransactionsHead.styled';

export function TransactionsHead() {
  return (
    <thead>
      <tr>
        <TableHead>Type</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Currency</TableHead>
      </tr>
    </thead>
  );
}
