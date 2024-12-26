<template lang="">
  <v-card height="100%">
    <v-list-item
      lines="two"
      prepend-avatar="@/assets/Image/Logo/logoNG.png"
      title="Ngọc Quý"
    >
      <template v-slot:subtitle="{ subtitle }">
        <v-btn variant="text" color="primary" class="text-caption" to="/">Đăng xuất</v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in Navigation"
        :key="index"
        v-model="NavList"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.link"
      ></v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      Navigation: [
        {
          title: "Thông tin chính",
          icon: "mdi mdi-information-variant",
          link: "/Admin",
        },
        {
          title: "Danh sách sản phẩm",
          icon: "mdi-format-list-bulleted",
          link: "/Admin/Danh-sach-san-pham",
        },
        {
          title: "Banner",
          icon: "mdi-panorama-variant-outline",
          link: "/Admin/Danh-sach-Banner",
        },
        { title: "Đơn đặt hàng", icon: "mdi-cart-variant"},
        {
          title: "Ý kiến khách hàng",
          icon: "mdi mdi-account-question-outline",
        },
      ],
    };
  },
  methods: {
  },
};
</script>
<style lang=""></style>
