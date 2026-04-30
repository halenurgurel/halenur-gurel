export function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm font-mono"
      style={{
        color: "var(--text-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <p>
        Designed &amp; built by{" "}
        <span className="gradient-text font-semibold">Halenur Gurel</span>
        {" "}· {new Date().getFullYear()}
      </p>
    </footer>
  );
}
