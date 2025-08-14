import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} />
      <Card title="Lion King" rating={4} />
      <Card title="Harry Potter" rating={5} />
    </div>
  );
};

export default App;
