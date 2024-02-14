<template>
  <v-app>
    <div v-show="active">
      <default-bar />
      <default-view />
      <Footer/>   
      <BtnCall/>  
    </div>
    <div class="loading" v-show="off">
      <Loading/>
    </div>
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
      active: false,    
      off:true  
    }
  },
  mounted() {
    setTimeout(() => (
      this.active = true,
      this.off = false
    ), 2000)
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => (this.loading = false), 1000)
    },
  },
}
</script>
<style scoped>
  .loading{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
