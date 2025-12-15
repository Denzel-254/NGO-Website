export default function ImpactStat({ value, label }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-950 lg:text-4xl">{value}</h2>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  );
}
