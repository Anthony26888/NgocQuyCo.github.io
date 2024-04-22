<template>

  <v-card :elevation="5">
    <v-tabs v-model="tab" class="text-teal-accent-4" align-tabs="center">
      <v-skeleton-loader type="heading" :loading="loading">
        <v-tab value="one">Tính năng nổi bật</v-tab>
        <v-tab value="two">Đặc điểm kĩ thuật</v-tab>
      </v-skeleton-loader>
    </v-tabs>

    <v-window v-model="tab" class="">
      <v-window-item value="one">
        <v-list v-for="item in Info.tech" :key="item">
          <v-skeleton-loader type="list-item-three-line" :loading="loading">
            <v-list-item>
              <v-icon size="large" color="green-darken-2" icon="mdi-circle-small"></v-icon>
              {{ item }}
            </v-list-item>
          </v-skeleton-loader>
        </v-list>
      </v-window-item>

      <v-window-item value="two" class="">
        <table class="table container mt-3 table-striped" v-if="Info.tableCheck == 'true'">
          <thead class="table-success">
            <tr>
              <th scope="col">Tính năng</th>
              <th scope="col">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Info.table" :key="item">
              <th scope="row">{{ item.name }}</th>
              <td>{{ item.detail }}</td>
            </tr>
          </tbody>
        </table>
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
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },
};
</script>
<style scoped></style>
