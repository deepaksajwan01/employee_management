import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeesAction";
import { createNewEmployee } from "../redux/actions/employeesAction";
import { updateEmployee } from "../redux/actions/employeesAction";
import "../static/styles/addEmployeeForm.css";

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.empyloyee ? props.empyloyee.employee_name : "",
      salary: props.empyloyee ? props.empyloyee.employee_salary : "",
      age: props.empyloyee ? props.empyloyee.employee_age : "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.match.params.id) {
      const { id } = this.props.match.params;
      this.props.updateEmployee(this.props.history, id, this.state);
    } else {
      const { name, salary, age } = this.state;
      const newEmployee = {
        employee_name: name,
        employee_salary: salary,
        employee_age: age,
      };
      this.props.createNewEmployee(newEmployee, this.props.history);
    }
  };

  render() {
    return (
      <div className="emp-form-wrapper">
        <form className="emp-form" onSubmit={this.handleSubmit}>
          <div className="form-label">
            <label>Name</label>
          </div>
          <input
            className="emp-form-input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Employee Name"
          />
          <div>
            <div className="form-label">
              <label>Salary</label>
            </div>
            <input
              className="emp-form-input"
              type="text"
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
              placeholder="Employee Salary"
            />
          </div>
          <div>
            <div className="form-label">
              <label>Age</label>
            </div>
            <input
              className="emp-form-input"
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Employee Age"
            />
          </div>
          <input className="emp-form-submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props.match.params.id);
  if (props.match.params.id) {
    return {
      empyloyee: state.employees.find(
        (emp) => emp.id === props.match.params.id
      ),
    };
  }
  return { empyloyee: null };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    },
    createNewEmployee: (newEmployee, history) => {
      dispatch(createNewEmployee(newEmployee, history));
    },
    updateEmployee: (id, employee) => {
      dispatch(updateEmployee(id, employee));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeeForm);
