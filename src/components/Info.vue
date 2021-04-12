<template>
  <div>
    <h1 class="flex justify-center font-bold mb-2 mr-72">HelloWorld</h1>
    <div class="flex justify-center">
      <div>
        <span class="photo-content"></span>
      </div>
      <br />
      <image class="photo-image"></image>
      <div class="ml-6">
        <button id="btn" class="text-white font-bold">load photo data</button>
      </div>
    </div>
  </div>
</template>

<script>
import sendApiReq from "./api.js";
export default {
  async mounted() {
      this.addEvent()
  },
  methods: {
    addEvent() {
      let button = document.querySelector("#btn");
      button.addEventListener("click", async () => {
        console.log("button pressed");
        const apiReq = await sendApiReq();
        if(apiReq){
            console.log(apiReq);
        }
      });
    },
  },
};
</script>

<style>
</style>