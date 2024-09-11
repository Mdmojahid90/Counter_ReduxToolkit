function Container({ children }) {
  return (
    <div className="card" style={{ width: "60%" }}>
      <div className="card-body">
        <h3 className="card-title">Counter</h3>
        {children}
      </div>
    </div>
  );
}

export default Container;
