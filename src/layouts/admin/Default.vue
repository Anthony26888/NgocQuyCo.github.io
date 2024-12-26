<template>
  <v-app class="bg-grey-lighten-3">
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <default-bar />
        </v-col>
        <v-col cols="9">
          <default-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
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
