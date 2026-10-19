import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import StatsSummary from "./components/summary/StatsSummary.jsx";
import OrderList from "./components/orders/OrderList.jsx";
import OrderForm from "./components/orders/OrderForm.jsx";
import About from "./components/views/About.jsx";

export default function App() {
  // useState #1: which view is showing ("board" or "about")
  const [view, setView] = useState("board");

  // useState #2: light or dark theme
  const [theme, setTheme] = useState("light");

  // useState #3: the list of orders
  const [orders, setOrders] = useState([
    { id: 1, customer: "Maya", size: "Large", ready: false },
    { id: 2, customer: "Jordan", size: "Medium", ready: true },
  ]);

  function addOrder(customer, size) {
    const newOrder = { id: Date.now(), customer: customer, size: size, ready: false };
    setOrders([...orders, newOrder]);
  }

  function toggleReady(id) {
    setOrders(orders.map((o) => (o.id === id ? { ...o, ready: !o.ready } : o)));
  }

  function removeOrder(id) {
    setOrders(orders.filter((o) => o.id !== id));
  }

  return (
    <div className={theme === "light" ? "app light" : "app dark"}>
      <Header
        view={view}
        setView={setView}
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      <main className="main">
        {view === "board" ? (
          <>
            <StatsSummary orders={orders} theme={theme} />
            <div className="grid">
              <OrderList orders={orders} onToggle={toggleReady} onRemove={removeOrder} />
              <OrderForm onAdd={addOrder} />
            </div>
          </>
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}
