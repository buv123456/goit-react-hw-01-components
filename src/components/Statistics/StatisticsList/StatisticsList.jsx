import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export function StatisticsList({ statsData }) {
  return (
    <ul className="stat-list">
      {statsData.map(i => (
        <li className="item" key={i.id}>
          <StatisticsItem label={i.label} value={i.percentage} />
        </li>
      ))}
    </ul>
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
