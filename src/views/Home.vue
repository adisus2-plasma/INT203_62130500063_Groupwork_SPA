<template>
<div>
  <Background>
  <div id="app" class="flex justify-center pt-6 mb-12 mr-8">
    <img class="logo" src="../assets/images/saturn.png">
    <h1 class="topic">W I T A R N . T H</h1>
  </div>



  <Info class="mt-96"></Info>

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
