import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faTrash} />
      <Button className="login">Login</Button>
    </div>
  );
}

export default App;
