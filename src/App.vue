<template>
<div id="app" style="background-image: url(./assets/sw.jpg)">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
  <div class="bg-black mb-16 h-16" id="app">
      <h3 class="text-center text-white justify-center">
        <font size="10">Star Wars</font>
      </h3>
    
     
  
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    
    <router-link class="ml-2 mr-10" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="ml-2 mr-10" to="/planets">Planets</router-link>
    <router-link class="ml-2 mr-10" to="/starships">Starships</router-link>
    <router-link class="ml-2 mr-10" to="/films">Films</router-link>
    </div>
      <router-view></router-view>
  
</div>

</template>



<script>
export default {
  name: "app",
  
  }
</script>

