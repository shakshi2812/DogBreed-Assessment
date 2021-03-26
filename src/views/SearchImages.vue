<template>
  <div class="search">
    <select v-model="inputValue" class="selectlist">
      <option value="" disabled selected hidden>Select Breed</option>
      <option v-for="breed in dogBreedsList" :value="breed" :key="breed">
        {{ breed }}
      </option>
    </select>
    <v-btn
      color="teal"
      large
      :disabled="!inputValue"
      @click="selectBreed(inputValue)"
      >Search
    </v-btn>
  </div>
</template>

<script>
import { getAllBreeds } from "@/services/breeds.service.js";
export default {
  name: "SearchImages",
  data() {
    return {
      dogBreedsList: [],
      inputValue: ""
    };
  },
  created() {
    this.getAllDogBreeds();
  },
  methods: {
    async getAllDogBreeds() {
      getAllBreeds().then(response => {
        let array = response.data.message;
        this.getKeys(array);
      });
    },
    getKeys(array) {
      if (array) {
        this.dogBreedsList = Object.keys(array);
      }
    },
    selectBreed(keys) {
      this.$router.push("/images/" + keys);
      this.inputValue = "";
    }
  }
};
</script>

<style scoped>
.selectlist {
  height: 35px;
  display: inline;
  border: 2px solid #ddd;
}
.search {
  text-align: center;
  padding: 20px;
}
</style>
