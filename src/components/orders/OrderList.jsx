import OrderCard from "./OrderCard.jsx";

export default function OrderList({ orders, onToggle, onRemove }) {
  return (
    <section className="panel">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet. Add one using the form.</p>
      ) : (
        <ul className="list">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} onToggle={onToggle} onRemove={onRemove} />
          ))}
        </ul>
      )}
    </section>
  );
}
