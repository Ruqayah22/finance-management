import "./App.css";
import Employees from "./pages/Employees";
import Homepage from "./pages/Homepage";
import Customer from "./pages/Customers";
import ManagerExpenses from "./pages/ManagerExpenses";
import GeneralExpenses from "./pages/GeneralExpenses";
import Notes from "./pages/Notes";
import Salary from "./pages/Salary";
import Purchases from "./pages/Purchases";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import Imports from "./pages/Imports";
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
        <Route path="/managerExpenses">
          <ManagerExpenses />
        </Route>
        <Route path="/generalExpenses">
          <GeneralExpenses />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/salary">
          <Salary />
        </Route>
        <Route path="/purchases">
          <Purchases />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/imports">
          <Imports />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
