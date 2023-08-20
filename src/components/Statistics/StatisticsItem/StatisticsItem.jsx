import { Label } from './StatisticsItem.styled';

export function StatisticsItem({ label, value }) {
  return (
    <>
      <Label className="label">{label}</Label>
      <span className="percentage">{value}%</span>
    </>
  );
}
