import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/shared/Navigation'

import "./App.css";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Employees} />
      <Route path="/employees" exact component={Employees} />
      <Route path="/addEmployee" exact component={AddEmployeeForm} />
      <Route path="/addEmployee/:id" exact component={AddEmployeeForm} />
      <Route path="/employee/:id" exact component={Employee} />
    </Router>
  );
}

export default App;
