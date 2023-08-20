import { Label, Value } from './StatisticsItem.styled';

export function StatisticsItem({ label, value }) {
  return (
    <>
      <Label className="label">{label}</Label>
      <Value className="percentage">{value}%</Value>
    </>
  );
}
