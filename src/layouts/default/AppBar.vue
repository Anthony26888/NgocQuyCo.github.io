<template>
  <v-app-bar :elevation="2" scroll-behavior="inverted">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-sm-none"
      >
      </v-app-bar-nav-icon>
    </template>
    <v-spacer></v-spacer>
    <div class="d-none d-sm-flex">
      <ul class="nav justify-content-space algin-item-center">
        <li class="nav-item mt-3">
          <v-btn variant="text text-black" @click="PushRouter(Intro)"
            >Về chúng tôi</v-btn
          >
        </li>
        <li class="nav-item mt-3">
          <v-menu open-on-hover transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="text text-black" v-bind="props">Sản phẩm</v-btn>
            </template>

            <v-list density="compact" nav class="mt-3">
              <v-list-item
                v-for="item in itemNav"
                :key="item"
                color="primary"
                :title="item.name"
                :value="item.name"
                @click="RouterFilter(item.router)"
              >
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="nav-item px-5">
          <a class="navbar-brand mx-auto" @click="PushRouter(Home)">
            <img
              src="/src/assets/Image/Logo/logoNG.png"
              alt="Ngoc Quý"
              width="70"
              height="70"
            />
          </a>
        </li>
        <li class="nav-item mt-3">
          <v-btn variant="text" @click="PushRouter(Service)">Dịch vụ</v-btn>
        </li>
        <li class="nav-item mt-3">
          <v-btn variant="text" @click="PushRouter(Contact)">Liên hệ</v-btn>
        </li>
      </ul>
    </div>
    <Cart/>
    <v-spacer></v-spacer>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="mt-1 d-flex d-sm-none">
    <v-list-item
      prepend-avatar="/src/assets/Image/Logo/LogoNG.png"
      title="Ngọc Quý"
      @click="PushRouter(Home)"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        title="Về chúng tôi"
        @click="PushRouter(Intro)"
      ></v-list-item>
      <v-list-group value="Product" nav>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Sản phẩm"></v-list-item>
        </template>

        <v-list-item
          v-for="item in itemNav"
          :key="item"
          :title="item.name"
          :value="item.name"
          @click="RouterFilter(item.router)"
        ></v-list-item>
      </v-list-group>
      <v-list-item title="Dịch vụ" @click="PushRouter(Service)"></v-list-item>
      <v-list-item title="Liên hệ" @click="PushRouter(Contact)"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.logoTitle {
  font-family: Inter;
  font-weight: 700;
}

.title-app {
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
}
.navbar.center .navbar-inner {
  text-align: center;
}

.navbar.center .navbar-inner .nav {
  display: inline-block;
  float: none;
  vertical-align: top;
}

@media only screen and (max-width: 500px) {
  .logoTitle {
    font-size: 16px;
  }
}
</style>
<script setup>
import Cart from "@/components/CartNav.vue"
import router from "@/router/index";
</script>
<script>
export default {
  data() {
    return {
      drawer: false,
      itemNav: [
        {
          name: "Máy in",
          router: "printer",
        },
        {
          name: "Linh kiện",
          router: "accessory",
        },
        {
          name: "Nguyên liệu",
          router: "material",
        },
      ],
      open: ["Product"],
      Intro: "ve-chung-toi",
      Home: "trang-chu",
      Product: "",
      Service: "dich-vu",
      Contact: "lien-he",
    };
  },
  methods: {
    PushRouter(value) {
      if (value == "ve-chung-toi") {
        return router.push({ name: "Intro" });
      }
      if (value == "trang-chu") {
        return router.push({ name: "Home" });
      }
      if (value == "dich-vu") {
        return router.push({ name: "Service" });
      }
      if (value == "lien-he") {
        return router.push({ name: "Contact" });
      }
    },
    RouterFilter(value) {
      return router.push({
        name: "San-pham",
        params: { id: value },
      });
    },
  },
};
</script>
