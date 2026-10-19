export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="btn" onClick={onToggle}>
      {theme === "light" ? "Night mode" : "Day mode"}
    </button>
  );
}
