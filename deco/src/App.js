import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Tasks from "./components/Tasks";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
