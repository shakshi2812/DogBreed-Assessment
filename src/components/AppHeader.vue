<template>
  <v-app-bar app dark color="teal">
    <v-toolbar-title class="white--text" color="primary ma-2"
      ><router-link class="white--text  text-decoration-none" to="/Dashboard"
        >Dog Breed Identification App!</router-link
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-title class="align--left">
      <router-link class="white--text  text-decoration-none" to="/search"
        >Search</router-link
      >
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>
