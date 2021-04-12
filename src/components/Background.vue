<template>
  <div class="w-screen h-screen">
    <video autoplay muted loop id="myVideo">
      <source :src="require(`@/assets/Nightsky.mp4`)" type="video/mp4" />
    </video>
    <slot></slot>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
.background {
  background-image: url("../assets/images/Blackhole.jpg");
}

#myVideo {
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>