//parent component that will render mycomp conditionally and will apply animation and transition on that comp.
<template>
    <div>
        <button @click="triggerMyComp">ToggleMyComp</button>
        <!-- To apply transition / animation on MyComp render it as given below in <transition> element -->
            <transition name="myTrans">
                <!-- render MyComp conditionally as below -->
                <my-comp v-if="showMyComp"></my-comp>
            </transition>
    </div>
</template>

<script setup>
 import MyComp from './MyComp.vue'
  import {ref} from 'vue'
  let showMyComp = ref(false)
function triggerMyComp() {
                showMyComp.value = true;
                setTimeout(()=>{
                    showMyComp.value = false
                },5000)
            }
        
  
</script>

<style scoped>
    .myTrans-enter-from {
        opacity: 0;
        transform: skewX(10deg);
    }
    .myTrans-enter-to {
        opacity: 1;
        transform: skewX(50deg);
    }
    /* .myTrans-enter-active {
        transition: transform 0.5s ease;
    }
     .myTrans-leave-active {
        transition: transform 0.5s ease;
    } */
    .myTrans-enter-active {
        animation: wabble 0.5s ease;
    }
    .myTrans-leave-active {
        animation: wabble 0.5s ease;
    }
     .myTrans-leave-from {
        opacity: 1;
        transform: skewX(50deg);
    }
    .myTrans-leave-to {
        opacity: 0;
        transform: skewX(10deg);
    }
    @keyframes wabble {
        0% {opacity: 0; transform: translateX(-60px);}
        50%{opacity: 1; transform: translateX(0px);}
        60%{transform: translateX(8px);}
        70%{transform: translateX(-8px);}
        80%{transform: translateX(4px);}
        90%{transform: translateX(-4px);}
        100%{transform: translateX(0);}
    }
</style>























