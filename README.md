# Slice Shop - Pizza Order Board

A simple React app (built with Vite) for tracking pizza orders.

## Run it
```bash
npm install
npm run dev
```
Then open the address shown in the terminal (usually http://localhost:5173).

## Requirements checklist
- 8 functional components in parent/child folders (App, Header, ThemeToggle, StatsSummary, OrderList, OrderCard, OrderForm, About)
- Props: App -> OrderList -> OrderCard, App -> Header -> ThemeToggle, etc.
- useState: view, theme, orders (App); customer, size, error (OrderForm)
- Controlled form: OrderForm
- Two views (board / about) switched with a string state, no router
- .map() renders the order list in OrderList
- CSS in src/styles.css (responsive, light/dark theme)
