import "./App.css";
import Employees from "./pages/Employees/Employees";
import Homepage from "./pages/Homepage";
import Customer from "./pages/customers/Customers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router style={{ height: "100%", width: "100%" }}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
        <Route path="/customers">
          <Customer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
