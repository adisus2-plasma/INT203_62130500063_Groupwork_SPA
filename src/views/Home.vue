<template>
<div>
  <Background>
  <div id="app" class="flex justify-center pt-6 mb-12 ">
    <img class="logo" src="../assets/images/saturn.png">
    <h1 class="topic">W I T A R N . N E W S</h1>
  </div>

  <Info class="mt-auto"></Info>

</Background>
</div>
  
</template>

<script>
  import Background from '../components/Background.vue'
  import Info from '../components/Info.vue'
  
  export default {
    name: 'App',
    components: {
      Background,
      Info
    }
  }
  
  
  </script>
