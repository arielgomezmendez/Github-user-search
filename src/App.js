import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1 className="title">User Search on Github</h1>
      <Search />
      <Card />
    </div>
  );
}

export default App;
