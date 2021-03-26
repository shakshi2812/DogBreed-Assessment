<template>
  <v-container grid-list-xl>
    <h2 class="text-center">Welcome to Dog Breed App!</h2>
    <br />
    <v-row align="center" justify="center">
      <v-col
        xs12
        sm6
        md4
        lg3
        v-for="(value, keys) in dogBreedsList"
        :key="keys"
      >
        <v-card
          hover
          max-width="210px"
          color="white"
          class="text-black text-center"
          @click="navigate(keys)"
        >
          <DisplayImage :name="keys" class="image"></DisplayImage>
          <v-card-text>
            <span class="black--text">
              <b>{{ keys | capitalise }}</b>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAllBreeds } from "@/services/breeds.service.js";
import DisplayImage from "./DisplayImages.vue";
export default {
  name: "Dashboard",
  components: {
    DisplayImage
  },
  data() {
    return {
      dogBreedsList: []
    };
  },
  created() {
    this.getAllDogBreeds();
  },
  methods: {
    async getAllDogBreeds() {
      getAllBreeds().then(response => {
        this.dogBreedsList = response.data.message;
      });
    },
    navigate(keys) {
      this.$router.push("/images/" + keys);
    }
  },
  filters: {
    capitalise(value) {
      return value.toUpperCase();
    }
  }
};
</script>
