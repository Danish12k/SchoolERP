import { environment } from "@env/environment";

const baseURL = environment.baseUrl;

export const apiEndpoint = {
    // Session Management
    ADD_SESSION: baseURL + '/Session/AddSession',
    UPDATE_SESSION: baseURL + '/Session/UpdateSession',
    DELETE_SESSION: baseURL + '/Session/DeleteSession',
    SESSION_LIST: baseURL + '/Session/SessionList',

    // Designation Management
    ADD_DESIGNATION: baseURL + '/Designation/AddDesignation',
    UPDATE_DESIGNATION: baseURL + '/Designation/UpdateDesignation',
    DELETE_DESIGNATION: baseURL + '/Designation/DeleteDesignation',
    DESIGNATION_LIST: baseURL + '/Designation/DesignationList',

    // Department Management
    ADD_DEPARTMENT: baseURL + '/Department/AddDepartment',
    UPDATE_DEPARTMENT: baseURL + '/Department/UpdateDepartment',
    DELETE_DEPARTMENT: baseURL + '/Department/DeleteDepartment',
    DEPARTMENT_LIST: baseURL + '/Department/DepartmentList',

    // Employee Management
    ADD_EMPLOYEE: baseURL + '/Employee/AddEmployee',
    UPDATE_EMPLOYEE: baseURL + '/Employee/UpdateEmployee',
    DELETE_EMPLOYEE: baseURL + '/Employee/DeleteEmployee',
    EMPLOYEE_LIST: baseURL + '/Employee/EmployeeList',

    // Authentication
    LOGIN: baseURL + '/Auth/Login',
    REGISTER: baseURL + '/Auth/Register',
    REFRESH_TOKEN: baseURL + '/Auth/RefreshToken',
};