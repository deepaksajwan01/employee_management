import { SET_CURRENT_EMPLOYEE_REQUEST } from "./types";
import { SET_CURRENT_EMPLOYEE_SUCESS } from "./types";
import { SET_CURRENT_EMPLOYEE } from "./types";
import axios from "axios";

export const fetchEmployeesRequest = () => {
  return {
    type: SET_CURRENT_EMPLOYEE_REQUEST,
  };
};

export const fetchEmployeesSucess = (employees) => {
  return {
    type: SET_CURRENT_EMPLOYEE_SUCESS,
    payload: employees,
  };
};

export const fetchCurrentEmployee = (employee) => {
  return {
    type: SET_CURRENT_EMPLOYEE,
    payload: employee,
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest);
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        const employees = response.data.data;
        dispatch(fetchEmployeesSucess(employees));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addNewEmployee = (newEmployee, history) => {
  return (dispatch) => {
    axios
      .post("http://dummy.restapiexample.com/api/v1/create")
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchEmployee = (id) => {
  return (dispatch) => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        const employees = response.data.data;
        const currentEmployee = employees.find((emp) => emp.id === id);
        dispatch(fetchCurrentEmployee(currentEmployee));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createNewEmployee = (newEmployee, history) => {
  return (dispatch) => {
    axios
      .post("http://dummy.restapiexample.com/api/v1/create")
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateEmployee = (history, id, employee) => {
  return (dispatch) => {
    axios
      .put(`http://dummy.restapiexample.com/api/v1/update/${id}`, employee)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteEmployee = (id) => {
  console.log("inside action", id);

  return (dispatch, getState) => {
    let updateEmp = getState().employees.filter((emp) => emp.id !== id);
    dispatch(fetchEmployeesSucess(updateEmp));
  };
};
