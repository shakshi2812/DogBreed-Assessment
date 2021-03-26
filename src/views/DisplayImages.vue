<template>
  <div>
    <v-img :src="image" align-center width="210px" height="210px"> </v-img>
  </div>
</template>

<script>
import { getRandomImages } from "@/services/breeds.service.js";

export default {
  name: "DisplayImage",
  props: ["name"],
  data() {
    return {
      image: ""
    };
  },
  created() {
    this.getBreedImages();
  },
  methods: {
    getBreedImages() {
      getRandomImages(this.name).then(response => {
        this.image = response.data.message;
      });
    }
  }
};
</script>
