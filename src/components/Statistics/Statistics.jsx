import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList/StatisticsList';

export function Statistics({ title = '', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <StatisticsList statsData={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
