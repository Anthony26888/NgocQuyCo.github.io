<template lang="">
  <VRow>
    <VCol>
      <v-navigation-drawer width="300" height="100vh">
        <v-list v-model:opened="open">
          <v-list-item  title="Tất cả"></v-list-item>

          <v-list-group value="Model">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Dòng máy"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in model"
              :key="i"
              :value="title"
              :title="title"              
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Accessory">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Linh kiện"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in accessory"
              :key="i"
              :value="title"
              :title="title"              
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Ink">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Mực"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in accessory"
              :key="i"
              :value="title"
              :title="title"              
            ></v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </VCol>

    <VCol></VCol>
  </VRow>
</template>
<script>
export default {
  data() {
    return {
      open: ["Users"],      
      model: [
        ["Linx"],
        ["Hitachi"]
      ],

      accessory: [
        ["Borad"],
        ["Bàn phím"],
        ["Đầu in"],
        ["Màn hình"],
        ["Hệ thống lọc"],
        ["Hệ thống điện"],        
        ["Van"],
        ["Vỏ máy"]
      ],
    };
  },
};
</script>
<style lang=""></style>
