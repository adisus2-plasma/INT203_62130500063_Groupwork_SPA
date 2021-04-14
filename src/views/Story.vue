<template >
  <div >
    <Background> 
        <div class="flex justify-center">
        <div class="container p-3 bg-white rounded-xl max-w-screen-lg hover:shadow">
            <base-card>
            <ul v-for="result in dataResult" :key="result.id">
                <li>
                    <span>{{result.title}}</span>
                    <br>
                    <span>{{result.date}}</span>
                    <br>
                    <span>{{result.explanation}}</span>
                </li>
                <button @click="edit(result.id)" class="my-4 mx-14 hover:shadow">Edit</button>
                <button @click="deleteDataResult($event, result.id)" class=" my-4 mx-14 hover:shadow" label="x">Delete</button>
            </ul>
            </base-card>
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
      url: 'http://localhost:5000/dataResult',
      errorMessage: null,
      oldId:'',
      oldTitle: '',
      oldDate: '',
      oldExplanation: '',
      // isEdit: false,
        dataResult: [
    ],
    }
  },
  methods: {
    async fetchItemResult() {
      const res = await fetch(this.url);
      const datas = await res.json();
      return datas;
    },
    async deleteDataResult(label, id){
      if(confirm(`Are you sure to ${label}?`)){ 
        const res = await fetch(`${this.url}/${id}`,{
          method: 'DELETE'
        })
        res.status === 200
        ? (this.dataResult = this.dataResult.filter(
          (data) => data.id !== id
        ))
        : alert('Error to delete data')
      }
      alert("Deleted!!")
    },
      edit(id){
        this.$router.push(`/edit/${id}`)
        console.log(this)
      }
    // editData(passingData, editId, editTitle, editDate, editExplanation){
    //   this.isEdit = true
    //   this.oldId = editId
    //   this.oldTitle = editTitle
    //   this.oldDate = editDate
    //   this.oldExplanation = editExplanation

    //   alert(
    //     `${passingData.label} mode: ${this.isEdit}, you want to edit current daata {id: ${editId}, title: ${editTitle}, date: ${editDate}, Explanation: ${editExplanation}}`
    //   )
    // },
    // async editDataResult(editingData) {
    //   const res = await fetch(`${this.url}/${editingData.id}`, {
    //     mothod: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       title: editingData.title,
    //       date: editingData.date,
    //       explanation: editingData.explanation
    //     })
    //   })
    //   const data = await res.json()
    //   this.dataResult = this.dataResult.map((datas) =>
    //     datas.id === data.id 
    //     ? {
    //       ...datas,
    //       title: data.title,
    //       date: data.date,
    //       explanation: data.explanation
    //     }
    //     : datas
    //     )
    //     this.isEdit = false
    // }
  },
  async created() {
      this.dataResult = await this.fetchItemResult();
    },
};
</script>
