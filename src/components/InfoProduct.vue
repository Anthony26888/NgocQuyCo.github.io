<template lang="">
  <v-main class="">
    <div class="container">
      <v-row>
        <v-col>
          <img
            src="../assets/Image/Product/Linx8900.png"
            alt=""
            srcset=""
            class=""
            cover
          />
        </v-col>
        <v-col>
          <v-card class="w-100 mt-5 card mx-auto container p-5">
            <v-card-item class="mx-auto" :elevation="3">
              <h1 class="text-teal-accent-4">{{ Info.name }}</h1>

              <v-card-subtitle
                ><span>{{ Info.model }}</span></v-card-subtitle
              >
            </v-card-item>

            <v-card-text>
              <span>{{ Info.description }}</span>
              <VSpacer />
              <VBtn class="bg-teal-accent-4 mt-5">Liên hệ ngay</VBtn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="mt-3">
        <v-card>
          <v-tabs v-model="tab" class="text-teal-accent-4" align-tabs="center">
            <v-tab value="one">Tính năng nổi bật</v-tab>
            <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-list :items="Info.tech">
                  <template v-slot:prepend>
                    <v-icon
                      size="large"
                      color="green-darken-2"
                      icon="mdi-check"
                    ></v-icon>
                  </template>
                </v-list>
              </v-window-item>

              <v-window-item value="two">
                <VRow>
                  <VCol>
                    <h6 class="text-center">KHẢ NĂNG IN</h6>
                    <v-list :items="Info.feature">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-check"
                        ></v-icon>
                      </template>
                    </v-list>
                  </VCol>
                  <VCol>
                    <h6 class="text-center">ĐIỀU KHIỂN IN</h6>
                    <v-list :items="Info.control">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-check"
                        ></v-icon>
                      </template>
                    </v-list>
                  </VCol>
                  <VCol>
                    <h6 class="text-center">ĐẶC TÍNH</h6>
                    <v-list :items="Info.special">
                      <template v-slot:prepend>
                        <v-icon
                          size="large"
                          color="green-darken-2"
                          icon="mdi-check"
                        ></v-icon>
                      </template>
                    </v-list>
                  </VCol>
                </VRow>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-main>
</template>

<script>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
export default {
  components: "InfoProduct",
  setup() {
    const store = useAppStore();
    const { Info } = storeToRefs(store);
    return { Info };
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: 100%;
}

.card {
  max-width: 100%;
  height: auto;
}
</style>
