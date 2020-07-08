import React from "react";

import { Link } from "react-router-dom";

import "../static/styles/employeeCard.css";
import { Card, CardBody, Headline, Button } from "precise-ui";

function EmployeeCard({ employee, handleDeleteEmployee }) {
  const { id } = employee;
  return (
    <div className="emp-card">
      <Card
        orientation="horizontal"
        style={{ maxHeight: "250px" }}
        layout={[2, 1, 2]}
      >
        <CardBody>
          <Headline>{employee.employee_name}</Headline>
          <div className="card-links">
            <div>
              <Link to={`/employee/${employee.id}`}>
                <Button buttonStyle="secondary">Details</Button>
              </Link>
            </div>
            <div>
              <Link to={`/addEmployee/${employee.id}`}>
                <Button buttonStyle="secondary">Edit</Button>
              </Link>
            </div>
            <div>
              <Button onClick={() => handleDeleteEmployee(id)}>Delete</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default EmployeeCard;
