<template>

    <v-row>
      <v-col>
        <router-link to="/San-pham" class="text-decoration-none">
          <v-card :width="widthCard" :height="heightCard" variant="text">
            <v-img src="/src/assets/Image/Banner/May8900-1-removebg-preview.png" class="hoverImg" :height="heightImg"></v-img>
            <p class="text-center text-muted" :style="`font-size:${fontsize}px`">Máy in phun</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/Giai-phap" class="text-decoration-none">
          <v-card :width="widthCard" :height="heightCard" variant="text">
            <v-img src="/src/assets/Image/Banner/MayLazerKingCode-1-removebg-preview.png" class="hoverImg" :height="heightImg"></v-img>
            <p class="text-center text-muted" :style="`font-size:${fontsize}px`">Máy in lazer</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/Thue-may" class="text-decoration-none">
          <v-card :width="widthCard" :height="heightCard" variant="text">
            <v-img src="/src/assets/Image/Banner/MayVT180-1-removebg-preview.png" class="hoverImg" :height="heightImg"></v-img>
            <p class="text-center text-muted" :style="`font-size:${fontsize}px`">Máy in thùng</p>
          </v-card>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/Lien-he" class="text-decoration-none">
          <v-card :width="widthCard" :height="heightCard" variant="text">
            <v-img src="/src/assets/Image/Banner/ink-removebg-preview.png" :height="heightImg"></v-img>
            <p class="text-center text-muted" :style="`font-size:${fontsize}px`">Nguyên liệu</p>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
</template>
<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const widthCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 70;
    case "sm":
      return 70;
    case "md":
      return 160;
    case "lg":
      return 170;
    case "xl":
      return 200;
    case "xxl":
      return 50;
  }

  return undefined;
});
const heightCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 90;
    case "sm":
      return 90;
    case "md":
      return 250;
    case "lg":
      return 250;
    case "xl":
      return 250;
    case "xxl":
      return 1920;
  }

  return undefined;
});
const heightImg = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 390;
    case "sm":
      return 50;
    case "md":
      return 195;
    case "lg":
      return 205;
    case "xl":
      return 180;
    case "xxl":
      return 1920;
  }

  return undefined;
});
const fontsize = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 8;
    case "sm":
      return 12;
    case "md":
      return 20;
    case "lg":
      return 24;
    case "xl":
      return 24;
    case "xxl":
      return 24;
  }

  return undefined;
});
const store = useAppStore();
store.FetchProduct();
</script>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style scoped>
.text {
  text-decoration: none;
}
.hoverImg{
  transform: scale(1.2, 1.2);
}
/* From Uiverse.io by nikk7007 */
</style>
