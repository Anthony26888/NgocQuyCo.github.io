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
              <v-btn color="teal-lighten-4" icon="mdi-phone" v-bind="props" :loading="loading" @click="load"
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
    <div class="loaderBar" v-show="off"></div>
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
.loaderBar {
  width: calc(160px / 0.707);
  height: 10px;
  background: #F9F9F9;
  border-radius: 10px;
  border: 1px solid #80CBC4;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}

.loaderBar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px) right/200% 100%;
  animation: fillProgress 2s ease-in-out infinite, lightEffect 1s infinite linear;
  animation-fill-mode: forwards;
}

@keyframes fillProgress {
  0% {
    width: 0;
  }

  33% {
    width: 33.333%;
  }

  66% {
    width: 66.67%;
  }

  100% {
    width: 100%;
  }
}

@keyframes lightEffect {
  0%, 20%, 40%, 60%, 80%, 100% {
    background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px) right/200% 100%;
  }

  10%, 30%, 50%, 70%, 90% {
    background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px, rgba(255, 255, 255, 0.3) 0 40px) right/200% 100%;
  }
}
</style>
