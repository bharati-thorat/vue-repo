<template>
    <div>
        <p v-if="loading">
            Still loading user details...........
        </p>
        <table border="1" v-if="!loading && data && data.length">
            <thead>User Details</thead>
            <tr v-for="(user,index) of data" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
            </tr>
        </table>
        <p v-if="error">
            Unable to fetch the details
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted,ref } from 'vue'

export default {
    name : 'UserDetails',

    setup() {
        //declare reactive data
        const data = ref(null)
        const loading = ref(null)
        const error = ref(null)

        function fetchUserDetails(){
            loading.value = true
            return axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{ 
                data.value = response.data 
                })
                .then(()=>{
                loading.value = false
            })
            .catch(()=>{
                error.value = "error"
               console.log("error occured") 
            })
        }
        onMounted(()=>{
            fetchUserDetails()
        })

        return { data, loading, error }
    }
}
</script>