<template>
  <v-app>
    <default-bar />
    <v-container fluid class="bg-grey-lighten-3">
      <default-view />
      <BtnCall />
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import Footer from "./Footer.vue";
import DefaultView from "./View.vue";
import BtnCall from "@/components/ButtonCall.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.view {
  margin-top: "100px";
}
</style>
