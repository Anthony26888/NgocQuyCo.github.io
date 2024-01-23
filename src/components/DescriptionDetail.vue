<template>
  <v-card>
    <v-tabs v-model="tab" class="text-teal-accent-4" align-tabs="center">
      <v-tab value="one">Tính năng nổi bật</v-tab>
      <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="p-5 p-xs-2">
      <v-window-item value="one">
        <v-list v-for="item in Info.tech" :key="item">
          <v-list-item>
            <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
            {{ item }}
          </v-list-item>
        </v-list>
      </v-window-item>

      <v-window-item value="two" class="">
        <VRow>
          <VCol cols xs="12" md="4">
            <div class="feature">
              <h5 class="text-center text-teal-accent-4">KHẢ NĂNG IN</h5>
              <v-list v-for="item in Info.feature" :key="item">
                <v-list-item>
                  <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
                  {{ item }}
                </v-list-item>
              </v-list>
            </div>
          </VCol>
          <VCol cols xs="12" md="4">
            <div class="control">
              <h5 class="text-center text-teal-accent-4">ĐIỀU KHIỂN IN</h5>
              <v-list v-for="item in Info.control" :key="item">
                <v-list-item>
                  <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
                  {{ item }}
                </v-list-item>
              </v-list>
            </div>
          </VCol>
          <VCol cols xs="12" md="4">
            <div class="special">
              <h5 class="text-center text-teal-accent-4">ĐẶC TÍNH</h5>
              <v-list v-for="item in Info.special" :key="item">
                <v-list-item>
                  <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
                  {{ item }}
                </v-list-item>
              </v-list>
            </div>
          </VCol>
        </VRow>

      </v-window-item>
    </v-window>
  </v-card>
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
<style scoped></style>
