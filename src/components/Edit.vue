<template>
  <div>
    <Background>
      <div class="flex justify-center">
        <div
          class="w-screen p-3 bg-white rounded-xl max-w-screen-lg hover:shadow"
        >
          <ul>
            <li>
              <label>Edit</label>
              <div class="w-12/12">
                <textarea v-model="explanation" class="border-black border" />
              </div>
            </li>
          </ul>

          <button
            @click="
              editedResult(explanation);
              putData();
            "
            class="my-4 mx-14 hover:shadow"
          >
            Save
          </button>
        </div>
      </div>
    </Background>
  </div>
</template>

<script>
import Background from "../components/Background.vue";
export default {
  components: {
    Background,
  },
  data() {
    return {
      url: "http://localhost:5000/dataResult",
      explanation: "",
      editedData: "",
      payload: null,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getData();
  },
  methods: {
    editedResult(explanation) {
      this.editedData = explanation;
      console.log(this.editedData);
    },
    async putData() {
      const newPayLoad = {
        title: this.payload.title,
        data: this.payload.data,
        image: this.payload.image,
        date: this.payload.date,
        explanation: this.explanation,
        id: this.payload.id,
      };
      console.log(newPayLoad);
      const putMethod = {
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(newPayLoad), // We send data in JSON format
      };
      const res = await fetch(this.url + `/${this.$route.params.id}`, putMethod);
      console.log(res);
    },

    async getData() {
      const res = await fetch(this.url + `/${this.$route.params.id}`);
      const datas = await res.json();
      this.explanation = await datas.explanation;
      this.payload = await datas;
      console.log(datas);
    },
  },
};
</script>
<style>
textarea {
  width: 1000px;
  height: 13rem;
}
</style>