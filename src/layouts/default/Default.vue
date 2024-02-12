<template>
  <v-app>
    <div v-show="active">
      <default-bar />
      <default-view />
      <Footer />
      <div class="position-fixed bottom-0 end-0 p-5">
        <div class="text-center">
          <v-menu v-model="menu" :close-on-content-click="false" location="end" transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn color="teal-darken-1" icon="mdi-phone" v-bind="props" :loading="loading" @click="load"
                size="x-large"></v-btn>
            </template>

            <v-card class="mb-3">
              <v-list>
                <v-list-item prepend-avatar="../../assets/Image/logoNG.png" title="Mr.Hải" subtitle="CEO của Ngọc Quý">
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-icon class="text-teal-darken-1">mdi-phone</v-icon>
                  <a class="ms-2" style="text-decoration: none; color: blue" href="tel:+84918504086"><b>0918504086</b></a>
                </v-list-item>

                <v-list-item>
                  <v-icon class="text-teal-darken-1">mdi-phone</v-icon>
                  <a class="ms-2" style="text-decoration: none; color: blue" href="tel:+84903062501"><b>0903062501</b></a>
                </v-list-item>

                <v-list-item>
                  <div class="d-flex">
                    <div>
                      <v-img src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png" width="30"></v-img>
                    </div>
                    <a class="ms-2" style="text-decoration: none; color: blue"
                      href="https://zalo.me/0903062501"><b>0903062501</b></a>
                  </div>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>
    </div>
    <div class="spinner container mx-auto" v-show="off">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import Footer from './Footer.vue'
import DefaultView from './View.vue'
</script>
<script>
export default {
  data() {
    return {
      show: false,
      loading: false,
      menu: false,
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
.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: -75px;
}

.spinner span {
  position: absolute;
  top: 50%;
  left: var(--left);
  width: 35px;
  height: 7px;
  background: #ffff;
  animation: dominos 1s ease infinite;
  box-shadow: 2px 2px 3px 0px black;
}

.spinner span:nth-child(1) {
  --left: 80px;
  animation-delay: 0.125s;
}

.spinner span:nth-child(2) {
  --left: 70px;
  animation-delay: 0.3s;
}

.spinner span:nth-child(3) {
  left: 60px;
  animation-delay: 0.425s;
}

.spinner span:nth-child(4) {
  animation-delay: 0.54s;
  left: 50px;
}

.spinner span:nth-child(5) {
  animation-delay: 0.665s;
  left: 40px;
}

.spinner span:nth-child(6) {
  animation-delay: 0.79s;
  left: 30px;
}

.spinner span:nth-child(7) {
  animation-delay: 0.915s;
  left: 20px;
}

.spinner span:nth-child(8) {
  left: 10px;
}

@keyframes dominos {
  50% {
    opacity: 0.7;
  }

  75% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  80% {
    opacity: 1;
  }
}
</style>
