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
      <v-toolbar density="comfortable" class="bg-amber-lighten-3 mt-5">
        <h2 class="text-teal-darken-1 p-3 text-center mt-2">MÁY IN DATE LINX</h2>
        <VSpacer />
        <router-link to="/Danh-sach-may-in" style="text-decoration: none; color: inherit">
          <v-btn class="bg-teal-darken-1 me-3">
            <strong class="mx-auto">Xem thêm >></strong>
          </v-btn>
        </router-link>
      </v-toolbar>
      <SlideMachine />

      <!--Printer TIJ-->
      <v-toolbar density="comfortable" class="bg-amber-lighten-3 mt-5">
        <h2 class="text-teal-darken-1 p-3 text-center mt-2">MÁY IN DATE THÙNG</h2>
        <VSpacer />
        <router-link to="/Danh-sach-may-in-thung" style="text-decoration: none; color: inherit">
          <v-btn class="bg-teal-darken-1 me-3">
            <strong class="mx-auto">Xem thêm >></strong>
          </v-btn>
        </router-link>
      </v-toolbar>
      <SlideTIJ />

      <!--Accessory-->
      <v-toolbar density="comfortable" class="bg-amber-lighten-3 mt-5">
        <h2 class="text-teal-darken-1 p-3 text-center mt-2">LINH KIỆN</h2>
        <VSpacer />
        <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit">
          <v-btn class="bg-teal-darken-1 me-3">
            <strong class="mx-auto">Xem thêm >></strong>
          </v-btn>
        </router-link>
      </v-toolbar>
      <SlideAccessory />

      <!--Ink-->
      <v-toolbar density="comfortable" class="bg-amber-lighten-3 mt-5">
        <h2 class="text-teal-darken-1 p-3 text-center mt-2">NGUYÊN LIỆU</h2>
        <VSpacer />
        <router-link to="/Danh-sach-nguyen-lieu" style="text-decoration: none; color: inherit">
          <v-btn class="bg-teal-darken-1 me-3">
            <strong class="mx-auto">Xem thêm >></strong>
          </v-btn>
        </router-link>
      </v-toolbar>
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
