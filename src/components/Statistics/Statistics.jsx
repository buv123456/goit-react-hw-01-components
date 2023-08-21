import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Title, Wrap } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Wrap>
      {title && <Title>{title}</Title>}
      <StatisticsList statsData={stats} />
    </Wrap>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
