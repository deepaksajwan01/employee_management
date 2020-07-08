import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeesAction";
import { deleteEmployee } from "../redux/actions/employeesAction";
import EmployeeCard from "./EmployeeCard";
import "../static/styles/employees.css";

class Employees extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  handleDeleteEmployee = (id) => {
    this.props.deleteEmployee(id);
  };

  render() {
    const { employees } = this.props;
    return (
      <div>
        <div className="card-wrapper">
          {employees.length > 0
            ? employees.map((emp) => {
                return (
                  <EmployeeCard
                    employee={emp}
                    handleDeleteEmployee={this.handleDeleteEmployee}
                  />
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    },
    deleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
