import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ view, setView, theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>Slice Shop</h1>
      <nav className="nav">
        <button className={view === "board" ? "btn active" : "btn"} onClick={() => setView("board")}>
          Order board
        </button>
        <button className={view === "about" ? "btn active" : "btn"} onClick={() => setView("about")}>
          About
        </button>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </nav>
    </header>
  );
}
