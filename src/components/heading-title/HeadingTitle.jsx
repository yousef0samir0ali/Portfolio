export default function HeadingTitle({ title, id }) {
  return (
    <h1
      id={id}
      style={{
        fontSize: " 2.1rem",
        color: "var(--blue)",
        marginBottom: "2rem",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      {title}
    </h1>
  );
}
