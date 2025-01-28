function Container({ result }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      {result}
    </div>
  );
}

export default Container;
