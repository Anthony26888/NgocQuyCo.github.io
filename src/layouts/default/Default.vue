<template>
  <v-app>
    <default-bar />
    <default-view />
    <Footer />
    <BtnCall />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import Footer from './Footer.vue'
import DefaultView from './View.vue'
import Loading from '@/components/Loading.vue'
import BtnCall from '@/components/ButtonCall.vue'
</script>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
  },
}
</script>
<style scoped>
.loading {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
