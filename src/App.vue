<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import UserDetails from './components/UserDetails.vue'
import List from './components/List.vue'
import MainComp from './components/MainComp.vue'
</script>

<template>
  <div>
   <nav>
   <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/getAllEmployeeNames">Get All Employee Names</router-link>|
    
   </nav>
   <router-view/>
   <user-details/>
   <list/>
   <main-comp/>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
