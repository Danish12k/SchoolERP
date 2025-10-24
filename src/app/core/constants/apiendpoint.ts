import { environment } from "@env/environment";

const baseURL = environment.baseUrl;

export const apiEndpoint = {

    // Authentication
    LOGIN: baseURL + '/Auth/Login',
    REGISTER: baseURL + '/Auth/Register',
    REFRESH_TOKEN: baseURL + '/Auth/RefreshToken',

    //sess
    // Session Management
    session: {
        add: baseURL + '/Session/AddSession',
        update: baseURL + '/Session/UpdateSession',
        delete: baseURL + '/Session/DeleteSession',
        list: baseURL + '/Session/SessionList',
    },

    // Designation Management
    designation: {
        add: baseURL + '/Designation/AddDesignation',
        update: baseURL + '/Designation/UpdateDesignation',
        delete: baseURL + '/Designation/DeleteDesignation',
        list: baseURL + '/Designation/DesignationList',
    },

    //section
    section: {
        add: baseURL + '/Section/AddSection',
        update: baseURL + '/Section/UpdateSection',
        get: baseURL + '/Section/GetSection?SectionId=',
        delete: baseURL + '/Section/DeleteSection',
        list: baseURL + '/Section/SectionList',

        assignSection: baseURL + '/Course/AssignSection',
    },

    //college
    college: {
        add: baseURL + '/Course/AddClass',
        update: baseURL + '/Course/UpdateClass',
        get: baseURL + '',
        list: baseURL + '/College/CollegeList',
        ListBySessionAndCollege: baseURL + '/Course/ClassList',
        delete: baseURL + '/College/DeleteCollege',
    },

    faculty: {
        listByCollege: baseURL + '/Faculty/FacultyList?CollegeId='
    },

    SMSAPI: {
        listByCollegeId: baseURL + '/SmsApi/SmsApiList?CollegeId=',
        add: baseURL + '/SmsApi/AddApi',
        update: baseURL + '/SmsApi/UpdateAPI',
        delete: baseURL + '/SmsApi/Delete'

    },

    //expense head
    expensehead: {
        add: baseURL + '/Expense/AddExpense',
        update: baseURL + '/Expense/UpdateExpense',
        delete: baseURL + '/Expense/DeleteExpense?Id=',
        list: baseURL + '/Expense/ExpenseList',
    },

    //Fee Group
    feeGroup: {
        add: baseURL + '/FeeGroup/AddFeeGroup',
        update: baseURL + '/FeeGroup/UpdateFeeGroup',
        delete: baseURL + '/FeeGroup/DeleteFeeGroup?Id=',
        list: baseURL + '/FeeGroup/GetGroupList',
    },

    //fee head
    feeHead: {
        add: baseURL + '/FeeHead/AddFeeHead',
        update: baseURL + '/FeeHead/UpdateFeeHead',
        // delete:baseURL+'',
        list: baseURL + '/FeeHead/FeeHeadList',
    },

    //fee installment
    feeInstallment: {
        add: baseURL + '/FeeInstallment/AddFeeHead',
        update: baseURL + '/FeeInstallment/UpdateInstallment',
        // delete:baseURL+'',
        listByCollegeAndSession: baseURL + '/FeeInstallment/FeeInstallmentList'
    },

    //house
    house: {
        add: baseURL + '/House/AddHouse',
        update: baseURL + '/House/UpdateHouse',
        list: baseURL + '/House/HouseList',
    },

    //salutation
    salutation: {
        add: baseURL + '/Salutaion/AddSalutaion',
        update: baseURL + '/Salutaion/UpdateSalutaion',
        list: baseURL + '/Salutaion/SalutationList',
    },

    //admin category
    category: {
        add: baseURL + '/Category/AddCategory',
        update: baseURL + '/Category/UpdateCategory',
        list: baseURL + '/Category/CategoryList',
    }

};