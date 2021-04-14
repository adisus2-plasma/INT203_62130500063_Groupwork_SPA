<template>
  <div class="flex justify-center mt-7 mb-98">
    <div>
      <button @click="addEvent" id="btn" class="btnShowData">load photo data from NASA</button>
    </div>
    <br />
    <div v-if="isShowData" class="p-3 bg-white rounded-xl max-w-screen-lg hover:shadow">
      <div>
        <span class="photo-title text-fuchsia-900 text-bold">{{ fetchItem.title }}</span>
        <br />

        <span class="photo-date">{{ fetchItem.date }}</span>
        <br />

        <span class="photo-content">{{ fetchItem.explanation }}</span>

        <br />
        <br>

        <img :src="image" class="photo-image rounded-xl" />
      </div>
      <button @click="save(fetchItem)" class="btnAddData">Add This Story</button>
    </div>
  </div>
</template>

<script>
import sendApiReq from "./api.js";
export default {
  data() {
    return {
      isShowData: false,
      url: "http://localhost:5000/dataResult",
      fetchItem: {
        title: "",
        data: "",
        image: "",
      },
    };
  },
  methods: {
    addEvent() {
      const res = sendApiReq();
      res
        .then((data) => {
          console.log(data);
          this.fetchItem.title = data.title;
          this.fetchItem.date = data.date;
          this.fetchItem.explanation = data.explanation;
          this.image = data.hdurl;
        })
        .then(() => {
          this.setIsShowData();
        });
    },

    setIsShowData() {
      this.isShowData = true;
    },

    async save(data) {
      const response = await fetch(this.url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      console.log(this.save);
      console.log(response);
      alert("Saved!!")
    },
  },
};
</script>

<style>
  .photo-image {
   max-width: 100%;
  height: auto;
  }
</style>