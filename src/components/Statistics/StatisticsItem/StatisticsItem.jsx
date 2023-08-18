export function StatisticsItem({ label, value }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{value}%</span>
    </>
  );
}
