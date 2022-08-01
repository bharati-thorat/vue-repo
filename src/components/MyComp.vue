//child component will be rendered conditionally and it will be applied with transition and animation
<template>
    <div id="mycmp">
        <h1>{{ inputVal }}</h1>
        <input type="text" placeholder="Hello From MyComp" 
        @keypress.enter="inputVal=$event.target.value"/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let inputVal = ref("")
</script>

<style scoped>
    #mycmp {
        font-size : 30px;
        color: red;
    }
</style>