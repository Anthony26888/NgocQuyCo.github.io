<template lang="">
  <v-card>
    <v-data-iterator
      :items="store.accessory"
      :items-per-page="12"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="p-2">
          <v-chip-group mandatory selected-class="text-success"  >
            <v-chip v-for="item in tag" :key="item" @click="this.search=item.title">{{ item.title }}</v-chip>            
          </v-chip-group>
          <VSpacer />
          <v-text-field
            v-model="search"
            clearable
            density="comfortable"
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            style="max-width: 300px"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <div class="d-flex flex-wrap justify-lg-center algin-center">
            <v-card class="m-3" width="250" v-for="value in items" :key="value">
              <v-img
                class="align-end"
                height="250"
                width="250"
                :src="value.raw.img"
                cover
              ></v-img>
              <v-card-subtitle class="pt-4">
                {{ value.raw.model }}
              </v-card-subtitle>

              <v-card-text>
                <h5>{{ value.raw.name }}</h5>
                <br />
                <h6 class="text-red-lighten-1">Giá: Liên hệ</h6>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      search: "",
      tag: [
        { title: "Linx" },
        { title: "Lọc" },
        { title: "Board" },
        { title: "Bơm" },
        { title: "Màn hình" },
        { title: "Bàn phím" },
        { title: "Van" },
        { title: "Khác" }
      ]
    };
  },
  methods: {
    filter() {
      this.search = 'Lọc'
    }
  },
};
</script>
<style lang=""></style>
