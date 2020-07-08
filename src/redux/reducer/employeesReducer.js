import { SET_CURRENT_EMPLOYEE_REQUEST } from "../actions/types";
import { SET_CURRENT_EMPLOYEE_SUCESS } from "../actions/types";
import {SET_CURRENT_EMPLOYEE} from '../actions/types'
import {DELETE_EMPLOYEE} from '../actions/types'
// import {SET_CURRENT_EMPLOYEE_FAILURE} from '../actions/types';

const initialState = {
  loading: true,
  employees: [],
  currentEmployee:{}
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_EMPLOYEE_SUCESS:
      return {
        ...state,
        loading: false,
        employees: action.payload,
      };
      case SET_CURRENT_EMPLOYEE:
        return{
          ...state,
          currentEmployee:action.payload
        };
        case DELETE_EMPLOYEE:
          return{
            ...state,
            currentEmployee:action.payload
          }
    default:
      return state;
  }
};

export default employeesReducer;
