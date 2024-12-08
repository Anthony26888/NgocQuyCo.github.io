<template lang="">
  <v-row justify="center" class="mt-2">
    <v-col cols="3" >
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
</template>
<script setup>
import Info from "@/components/Admin-Info.vue";
import Product from "@/components/Admin-Product.vue";
</script>
<script>
export default {
  data() {
    return {
      NavList: "tab-1",
      Navigation: [
        {
          title: "Thông tin chính",
          icon: "mdi mdi-information-variant",
          value: "tab-1",
        },
        {
          title: "Danh sách sản phẩm",
          icon: "mdi-format-list-bulleted",
          value: "tab-2",
        },
        {
          title: "Banner",
          icon: "mdi-panorama-variant-outline",
          value: "tab-3",
        },
        { title: "Đơn đặt hàng", icon: "mdi-cart-variant", value: "tab-4" },
        {
          title: "Ý kiến khách hàng",
          icon: "mdi mdi-account-question-outline",
          value: "tab-5",
        },
      ],
    };
  },
  methods: {
    ChangeNav(value) {
      this.NavList = value;
    },
  },
};
</script>
<style lang=""></style>
