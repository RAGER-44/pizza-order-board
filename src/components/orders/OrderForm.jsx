import { useState } from "react";

export default function OrderForm({ onAdd }) {
  // Controlled form: the inputs get their values from state
  const [customer, setCustomer] = useState("");
  const [size, setSize] = useState("Medium");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (customer.trim() === "") {
      setError("Please enter a customer name.");
      return;
    }
    onAdd(customer.trim(), size);
    setCustomer("");
    setSize("Medium");
    setError("");
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>New order</h2>
      <label>
        Customer name
        <input value={customer} onChange={(e) => setCustomer(e.target.value)} />
      </label>
      <label>
        Size
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>
      {error && <p className="error">{error}</p>}
      <button className="btn primary" type="submit">Add order</button>
    </form>
  );
}
