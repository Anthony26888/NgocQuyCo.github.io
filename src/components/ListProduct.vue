<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-breadcrumbs :items="['Trang chủ', 'Sản Phẩm']"></v-breadcrumbs>

        <div class="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
          <v-sheet :elevation="2" class="p-2 bg-teal-accent-4">
            <strong>Máy In Linx CIJ</strong>
          </v-sheet>
          <div class="row row-cols-5 g-3">
            <div class="col" v-for="value in store.Linx" :key="value">
              <v-card class="card mt-3" elevation="16" :max-height="350">
                <v-img class="w-100" height="200" :src="value.img"></v-img>

                <v-card-subtitle class="pt-4">
                  {{ value.model }}
                </v-card-subtitle>

                <v-card-text>
                  <h6>{{ value.name }}</h6>
                </v-card-text>

                <v-card-actions>
                  <router-link to="/Thong-tin-san-pham" class="mx-auto">
                    <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                      Xem chi tiết
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </div>
          </div>


          <v-sheet :elevation="2" class="p-2 bg-teal-accent-4 mt-3">
            <strong>Máy In Hitachi CIJ</strong>
          </v-sheet>
          <div class="row row-cols-5 g-3">
            <div class="col" v-for="value in store.Hitachi" :key="value">
              <v-card class="card mt-3" elevation="16" :max-height="350">
                <v-img class="w-100" height="200" :src="value.img"></v-img>

                <v-card-subtitle class="pt-4">
                  {{ value.model }}
                </v-card-subtitle>

                <v-card-text>
                  <h6>{{ value.name }}</h6>
                </v-card-text>

                <v-card-actions>
                  <router-link to="/Thong-tin-san-pham" class="mx-auto">
                    <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                      Xem chi tiết
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </div>


        <div class="d-lg-none">
          <v-sheet :elevation="2" class="p-2 bg-teal-accent-4">
            <strong>Máy In Linx CIJ</strong>
          </v-sheet>
          <div class="row row-cols-2 g-3">
            <div class="col" v-for="value in store.Linx" :key="value">
              <v-card class="card mt-3" elevation="16" :max-height="350">
                <v-img class="w-100" height="200" :src="value.img"></v-img>

                <v-card-subtitle class="pt-4">
                  {{ value.model }}
                </v-card-subtitle>

                <v-card-text>
                  <h6>{{ value.name }}</h6>
                </v-card-text>

                <v-card-actions>
                  <router-link to="/Thong-tin-san-pham" class="mx-auto">
                    <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                      Xem chi tiết
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </div>
          </div>
          <v-sheet :elevation="2" class="p-2 bg-teal-accent-4 mt-3">
            <strong>Máy In Hitachi CIJ</strong>
          </v-sheet>
          <div class="row row-cols-2 g-3">
            <div class="col" v-for="value in store.Hitachi" :key="value">
              <v-card class="card mt-3" elevation="16" :max-height="350">
                <v-img class="w-100" height="200" :src="value.img"></v-img>

                <v-card-subtitle class="pt-4">
                  {{ value.model }}
                </v-card-subtitle>

                <v-card-text>
                  <h6>{{ value.name }}</h6>
                </v-card-text>

                <v-card-actions>
                  <router-link to="/Thong-tin-san-pham" class="mx-auto">
                    <v-btn class="text-teal-accent-4" @click="store.GetInfo(value.id)">
                      Xem chi tiết
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </div>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>

<script>
export default {};
</script>
<style scoped></style>
