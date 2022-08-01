<template>
    <div>
        <input type="text" v-model="newTodo" @keypress.enter="addTodo" placeholder="Enter new todo item"/>
        <br>
        <!-- rendering list from below comp and to apply animation / transition on group of element use <transition-group> -->
        <transition-group tag="ul" name="list">
            <li v-for="todo of todos" :key="todo.id">
                {{todo.name}}
                <button @click="deleteTodo(todo.id)">Delete Todo</button>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name : 'TodoList',
    setup() {
        const todos = ref([
            {name:'Complete reading', id:1},
            {name:'Finish demos',id:2}
        ])

        const newTodo = ref("")

        const addTodo = ()=> {
            if(newTodo.value){
                const id = Math.random()
                todos.value = [{name:newTodo,id},...todos.value]
            }
        }
        const deleteTodo = (id) =>{
            todos.value = todos.value.filter(todo=>todo.id!=id)
        }
        return {todos,addTodo,newTodo,deleteTodo}
    }
    
}
</script>
<style>
    .list-enter-from {
        opacity: 0;
        transform: skewX(20deg);
    }
    .list-enter-to {
        opacity: 1;
        transform: skewX(40deg);
    }
    .list-enter-active {
        transition: transform 0.5s ease-in;
    }
    .list-leave-active {
        transition: transform 0.5s ease-in;
    }
    .list-leave-from {
          opacity: 1;
        transform: skewX(40deg);
    }
    .list-leave-to{
        opacity: 0;
        transform: skewX(20deg);
    }

</style>
















