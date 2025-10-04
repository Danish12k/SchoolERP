import { environment } from "@env/environment";

const baseURL = environment.baseUrl;

export const apiEndpoint = {
    
    // Authentication
    LOGIN: baseURL + '/Auth/Login',
    REGISTER: baseURL + '/Auth/Register',
    REFRESH_TOKEN: baseURL + '/Auth/RefreshToken',

    //sess
    // Session Management
    session:{
        add: baseURL + '/Session/AddSession',
        update: baseURL + '/Session/UpdateSession',
        delete: baseURL + '/Session/DeleteSession',
        list: baseURL + '/Session/SessionList', 
    },

    // Designation Management
    designation:{
        add: baseURL + '/Designation/AddDesignation',
        update: baseURL + '/Designation/UpdateDesignation',
        delete: baseURL + '/Designation/DeleteDesignation',
        list: baseURL + '/Designation/DesignationList',
    }

   

    
   
};