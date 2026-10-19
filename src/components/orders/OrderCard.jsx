export default function OrderCard({ order, onToggle, onRemove }) {
  return (
    <li className={order.ready ? "card ready" : "card"}>
      <div>
        <h3>{order.customer}</h3>
        <p>{order.size} pizza · {order.ready ? "Ready" : "Baking"}</p>
      </div>
      <div className="card-buttons">
        <button className="btn" onClick={() => onToggle(order.id)}>
          {order.ready ? "Back to oven" : "Mark ready"}
        </button>
        <button className="btn" onClick={() => onRemove(order.id)}>Remove</button>
      </div>
    </li>
  );
}
