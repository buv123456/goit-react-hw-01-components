import PropTypes from 'prop-types';
import { Label } from './StatisticsItem.styled';

export function StatisticsItem({ label, value }) {
  return (
    <>
      <Label>{label}</Label>
      <span>{value}%</span>
    </>
  );
}

StatisticsItem.propType = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}