import Button from "./components/Button";

const App = () => {
  const handleClick = () => {
    console.log("Clicou");
  };

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building asd things with Rsbuild.</p>
      <Button onClick={handleClick}>Clique</Button>
    </div>
  );
};

export default App;
