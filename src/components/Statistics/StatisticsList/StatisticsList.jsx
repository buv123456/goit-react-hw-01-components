import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { Item, List } from './StatisticsList.styled';

const colors = ['skyblue', 'violet', 'red', 'turquoise', 'limegreen'];

export function StatisticsList({ statsData }) {
  return (
    <List>
      {statsData.map((i, idx) => (
        <Item key={i.id} color={colors[idx]}>
          <StatisticsItem label={i.label} value={i.percentage} />
        </Item>
      ))}
    </List>
  );
}

StatisticsList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
