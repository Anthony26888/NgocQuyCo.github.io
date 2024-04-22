<template>
  <vContainer>
    <v-app>
      <VRow justify="center" align="center">
        <VCol cols xs="12" md="6">
          <carousels />
        </VCol>
        <VCol cols xs="12" md="6">
          <Title />
        </VCol>
      </VRow>
      <Select class="mt-3" />

      <!--Printer CIJ-->
      <v-skeleton-loader type="heading" class="mt-4" :loading="loading">
        <v-toolbar density="comfortable" class="bg-amber-lighten-3">
          <h2 class="text-teal-darken-1 p-3 text-center mt-2">MÁY IN DATE</h2>
          <VSpacer />
          <router-link to="/Danh-sach-may-in-date" style="text-decoration: none; color: inherit">
            <v-btn class="bg-teal-darken-1 me-3">
              <strong class="mx-auto">Xem thêm >></strong>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-skeleton-loader>
      <SlideMachine />

      <!--Printer Lazer-->
      <v-skeleton-loader type="heading" class="mt-4" :loading="loading">
        <v-toolbar density="comfortable" class="bg-amber-lighten-3 ma-2 mb-2">
          <h2 class="text-teal-darken-1 p-3 text-center mt-2">
            MÁY KHẮC LAZER
          </h2>
          <VSpacer />
          <router-link to="/Danh-sach-may-khac-lazer" style="text-decoration: none; color: inherit">
            <v-btn class="bg-teal-darken-1 me-3">
              <strong class="mx-auto">Xem thêm >></strong>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-skeleton-loader>
      <SlideLazer />

      <!--Printer TIJ-->
      <v-skeleton-loader type="heading" class="mt-4" :loading="loading">
        <v-toolbar density="comfortable" class="bg-amber-lighten-3">
          <h2 class="text-teal-darken-1 p-3 text-center mt-2">
            MÁY IN DATE THÙNG
          </h2>
          <VSpacer />
          <router-link to="/Danh-sach-may-in-thung" style="text-decoration: none; color: inherit">
            <v-btn class="bg-teal-darken-1 me-3">
              <strong class="mx-auto">Xem thêm >></strong>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-skeleton-loader>

      <SlideTIJ />

      <!--Accessory-->
      <v-skeleton-loader type="heading" class="mt-4" :loading="loading">
        <v-toolbar density="comfortable" class="bg-amber-lighten-3">
          <h2 class="text-teal-darken-1 p-3 text-center mt-2">LINH KIỆN</h2>
          <VSpacer />
          <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit">
            <v-btn class="bg-teal-darken-1 me-3">
              <strong class="mx-auto">Xem thêm >></strong>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-skeleton-loader>
      <SlideAccessory />

      <!--Ink-->
      <v-skeleton-loader type="heading" class="mt-4" :loading="loading">
        <v-toolbar density="comfortable" class="bg-amber-lighten-3">
          <h2 class="text-teal-darken-1 p-3 text-center mt-2">NGUYÊN LIỆU</h2>
          <VSpacer />
          <router-link to="/Danh-sach-nguyen-lieu" style="text-decoration: none; color: inherit">
            <v-btn class="bg-teal-darken-1 me-3">
              <strong class="mx-auto">Xem thêm >></strong>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-skeleton-loader>
      <SlideInk />
    </v-app>
  </vContainer>
</template>

<script setup>
import carousels from "@/components/carousels";
import Select from "@/components/SelectPage.vue";
import SlideMachine from "@/components/SlideMachine.vue";
import SlideAccessory from "@/components/SlideAccessory.vue";
import Title from "@/components/TitleHomePage.vue";
import SlideInk from "@/components/SlideInk.vue";
import SlideTIJ from "@/components/SlideTIJ.vue";
import SlideLazer from "@/components/SlideLazer.vue";
</script>
<script>
export default {
  name: "Home",
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
@media only screen and (max-width: 700px) {
  h2 {
    font-size: 15px;
    font-weight: 700;
  }
}

@media only screen and (min-width: 700px) {
  h2 {
    font-weight: 700;
  }
}
</style>
