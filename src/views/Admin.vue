<template>
  <v-container class="pa-2" fluid>
    <v-row justify="center" class="mt-2">
      <v-col cols="3">
        <v-card height="100%">
          <v-list-item
            lines="two"
            prepend-avatar="@/assets/Image/Logo/logoNG.png"
            subtitle="Đăng xuất"
            title="Ngọc Quý"
          ></v-list-item>
          <v-divider></v-divider>

          <v-list
            density="compact"
            nav
            v-for="item in Navigation"
            :key="item.name"
          >
            <v-list-item
              v-model="NavList"
              :prepend-icon="item.icon"
              :title="item.title"
              @click="ChangeNav(item.value)"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card class="">
          <Info v-if="NavList == 'tab-1'" />
          <Product v-if="NavList == 'tab-2'" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Admin from "@/components/Admin.vue";
</script>
