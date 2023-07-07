import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find pictures of your favorite dog breeds</h1>
        <Link to="/allBreeds">Get Started</Link>
      </header>
    </div>
  );
}

export default App;
