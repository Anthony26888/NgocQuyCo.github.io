<template lang="">
  <v-card>
    <v-tabs v-model="tab" class="text-teal-accent-4" align-tabs="center">
      <v-tab value="one">Tính năng nổi bật</v-tab>
      <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-list v-for="item in Info.tech" :key="item">
            <v-list-item-subtitle>
              <v-icon
                size="large"
                color="green-darken-2"
                icon="mdi-circle-small"
              ></v-icon>
              {{ item }}
            </v-list-item-subtitle>
          </v-list>
        </v-window-item>

        <v-window-item value="two" class="mt-3">
          <div class="feature">
            <h6 class="text-center text-teal-accent-4">KHẢ NĂNG IN</h6>
            <v-list v-for="item in Info.feature" :key="item">
              <v-list-item-subtitle>
                <v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi-circle-small"
                ></v-icon>
                {{ item }}
              </v-list-item-subtitle>
            </v-list>
          </div>
          <div class="control">
            <h6 class="text-center text-teal-accent-4">ĐIỀU KHIỂN IN</h6>
            <v-list v-for="item in Info.control" :key="item">
              <v-list-item-subtitle>
                <v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi-circle-small"
                ></v-icon>
                {{ item }}
              </v-list-item-subtitle>
            </v-list>
          </div>
          <div class="special">
            <h6 class="text-center text-teal-accent-4">ĐẶC TÍNH</h6>
            <v-list v-for="item in Info.special" :key="item">
              <v-list-item-subtitle>
                <v-icon
                  size="large"
                  color="green-darken-2"
                  icon="mdi-circle-small"
                ></v-icon>
                {{ item }}
              </v-list-item-subtitle>
            </v-list>
          </div>
        </v-window-item>
      </v-window>
    </v-card-text>
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
<style scoped>

</style>
