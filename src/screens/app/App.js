import { User } from "../index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./componets/navbar";

function App() {
  return (
    <Router>
      {/* <div className="App">Inciiao</div> */}
      <NavBar />
      <Switch>
        <Route path="/user">
          <User></User>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
