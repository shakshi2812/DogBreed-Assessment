<template>
  <v-container grid-list-xl>
    <h2 class="text-center">{{ $route.params.name | capitalise }} IMAGES</h2>
    <br />
    <div v-if="subBreedList.length > 0" class="selectlist">
      <select v-model="selectedbreed" class="selectoption">
        <option value="" disabled selected hidden>Select Sub Breed</option>
        <option v-for="s in subBreedList" :key="s">{{ s }}</option>
      </select>
      <v-btn color="teal" large @click="selectSubBreed">show </v-btn>
    </div>
    <div v-if="subBreedImages.length > 0">
      <h4 class="subbreed">IMAGES OF {{ selectedbreed | capitalise }}</h4>
      <v-layout row align="center">
        <v-row justify="center">
          <v-col
            xs12
            sm6
            md4
            lg3
            v-for="subimgs in subBreedImages"
            :key="subimgs"
          >
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 16 : 2" width="210px" color="black">
                <v-img :src="subimgs" height="150px"></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-layout>
    </div>
    <div v-else>
      <v-layout row align="center">
        <v-row justify="center">
          <v-col xs12 sm6 md4 lg3 v-for="imgs in image" :key="imgs">
            <v-hover v-slot="{ hover }">
              <v-card :elevation="hover ? 16 : 2" width="210px" color="black">
                <v-img :src="imgs" height="150px"></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-layout>
    </div>
  </v-container>
</template>
<script>
import {
  getBreedImage,
  getSubBreedList,
  getSubBreedImage
} from "@/services/breeds.service.js";

export default {
  name: "ViewImages",
  data() {
    return {
      image: "",
      subBreedList: [],
      selectedbreed: "",
      subBreedImages: ""
    };
  },
  created() {
    this.BreedImage();
    this.SubBreedList();
  },
  methods: {
    async BreedImage() {
      getBreedImage(this.$route.params.name).then(response => {
        this.image = response.data.message;
      });
    },
    async SubBreedList() {
      getSubBreedList(this.$route.params.name).then(response => {
        this.subBreedList = response.data.message;
      });
    },
    selectSubBreed() {
      getSubBreedImage(this.$route.params.name, this.selectedbreed).then(
        response => {
          this.subBreedImages = response.data.message;
        }
      );
    }
  },
  filters: {
    capitalise(value) {
      return value.toUpperCase();
    }
  }
};
</script>
<style scoped>
.selectlist,
.subbreed {
  text-align: center;
  padding: 20px;
}
.selectoption {
  height: 35px;
  display: inline;
  border: 2px solid #ddd;
}
</style>
