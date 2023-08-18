import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import data from 'data.json';
import user from 'user.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
