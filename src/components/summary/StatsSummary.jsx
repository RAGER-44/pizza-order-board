export default function StatsSummary({ orders, theme }) {
  const readyCount = orders.filter((o) => o.ready).length;
  const bakingCount = orders.length - readyCount;

  return (
    <section className="stats">
      <div className="stat"><strong>{bakingCount}</strong> in the oven</div>
      <div className="stat"><strong>{readyCount}</strong> ready</div>
      <div className="stat"><strong>{theme === "light" ? "Light" : "Dark"}</strong> theme</div>
    </section>
  );
}
