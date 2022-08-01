//this component is going fetch details from EmployeeAPI

<template>
    <div>
        <table border="1">
            <tr>
                <!-- <th>Id</th> -->
                <th>Name</th>
                <!-- <th>Designation</th> -->
            </tr>
            <tr v-for="(employee,index) of employees" :key="index">
                <!-- <td>{{employee.eid}}</td> -->
                <!-- below is an implementation of nested routing -->
                <!-- <td><router-link :to="{name:'Emp',params:{id:employee.eid,ename:employee.empName,design:employee.designation}}">
                    {{employee.empName}}</router-link></td> -->
                <td><router-link :to="{name:'Emp',params:{id:employee.eid,ename:employee.empName,design:employee.designation}}">
                    {{employee.empName}}</router-link></td>
                <!-- <td>{{employee.designation}}</td> -->
            </tr>
        </table>
    </div>
</template>

<script setup>

import EmployeeAPI from '../EmployeeAPI'
import {ref} from 'vue'
let employees = ref([])
employees = EmployeeAPI.all()
</script>

