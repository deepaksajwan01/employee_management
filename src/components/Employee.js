import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployee } from "../redux/actions/employeesAction";
import { Link } from "react-router-dom";
import '../static/styles/employee.css'
const { Card, CardBody, Button, Headline } = require("precise-ui");


class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEmployee(id);
  }
  render() {
    const {currentEmployee} = this.props
    return (
      <div className="emp-detail-wrap" >
        {this.props.currentEmployee ? (
          <div>
           <div className="emp-detail-card">
            <Card>
              <CardBody>
              <Headline>Name: {currentEmployee.employee_name}</Headline>
              <Headline>Salary: {currentEmployee.employee_salary}</Headline>
              <Headline>Age: {currentEmployee.employee_age}</Headline>
              </CardBody>
              <div className="links-wrap">
                <div>
                  <Link to="/"><Button buttonStyle="secondary">Home</Button></Link>
                </div>
                <div>
                <Link to={`/addEmployee/${currentEmployee.id}`}><Button>Edit</Button></Link>
                </div>
              </div>
            </Card>
           </div>
          </div>
        ) : (
          <h1>User Not Found</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentEmployee: state.currentEmployee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployee: (id) => {
      dispatch(fetchEmployee(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
