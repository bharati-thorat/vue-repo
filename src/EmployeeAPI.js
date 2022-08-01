const EmployeeAPI = {
    employeeList : [
        {eid:101, empName:'Kavita',designation:'Manager'},
        {eid:102, empName:'Ganesh',designation:'Senior Manager'},
        {eid:103, empName:'Soumya',designation:'Associate'},
        {eid:104, empName:'Vishakha',designation:'Executive'},
        {eid:105, empName:'Shilpa',designation:'Assistant Manager'},
        {eid:106, empName:'Shubhangi',designation:'Manager'}
    ],
    all : function() {
        return this.employeeList
    }
}

export default EmployeeAPI;