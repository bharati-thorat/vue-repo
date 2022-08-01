<template>
    <div>
        Rendering respective employee details
        <!-- using route object and its params property we can access path params  -->
        <p> id is {{$route.params.id}}</p>
        <p> name is {{$route.params.ename}}</p>
        <p> Designation is {{$route.params.design}}</p>
        
    </div>
</template>

<script>

</script>