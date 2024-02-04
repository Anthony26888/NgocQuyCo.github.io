<template>
  <v-card :elevation="7">
    <v-tabs v-model="tab" class="text-teal-accent-4" align-tabs="center">
      <v-tab value="one">Tính năng nổi bật</v-tab>
      <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="">
      <v-window-item value="one">
        <v-list v-for="item in Info.tech" :key="item">
          <v-list-item>
            <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
            {{ item }}
          </v-list-item>
        </v-list>
      </v-window-item>

      <v-window-item value="two" class="">
        <table class="table container mt-3 table-striped" v-if="Info.tableCheck == 'true'">
          <thead class="table-success">
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Lazer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Info.table" :key="item">
              <th scope="row">{{ item.name }}</th>
              <td>{{ item.detail }}</td>
            </tr>            
          </tbody>
        </table>

        <VRow class="container mx-auto" v-else>
          <VCol cols xs="12" md="6">
            <div class="feature">
              <h5 class="text-center text-teal-accent-4">KHẢ NĂNG IN</h5>
              <v-list v-for="item in Info.feature" :key="item">
                <v-list-item>
                  <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
                  <span>{{ item }}</span>
                </v-list-item>
              </v-list>
            </div>
          </VCol>
          <VCol cols xs="12" md="6">
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
