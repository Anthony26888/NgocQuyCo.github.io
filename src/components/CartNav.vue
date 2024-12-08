<template lang="">
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-badge color="error" :content="ListCart.length" floating>
            <v-icon>mdi mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-card max-height="300" width="300" class="mt-3">
        <v-card-title>Giỏ hàng</v-card-title>

        <v-card-text>
          <v-list lines="two" nav >
            <v-list-item
              v-for="(item, index) in ListCart"
              :key="index"
              :title="item.name"
              subtitle="x 1"
              :prepend-avatar="`/src/assets/Image/Product/${item.img}`"
              append-icon="mdi mdi-close"
              variant="tonal"
            >
              <template v-slot:append>
                <v-btn
                  color="grey-lighten-1"
                  icon="mdi mdi-close"
                  variant="text"
                  size="xs"
                  @click="store.RemoveCart(index)"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
          <p v-if="!ListCart.length" class="text-center text-muted">
            Chưa có sản phẩm nào.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="PushRouter()"
            block
            class="text-caption bg-primary text-white"
            v-if="ListCart.length"
          >
            Đặt hàng
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { useAppStore } from "@/store/app";
import router from "../router/index";
const store = useAppStore();
const { name } = useDisplay();

const widthItem = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 165;
    case "sm":
      return 185;
    case "md":
      return 50;
    case "lg":
      return 50;
    case "xl":
      return 50;
  }

  return undefined;
});
</script>
<script>
export default {
  data() {
    return {
      menu: false,
      ListCart: [],
      intervalId: [],
    };
  },
  mounted() {
    // Fetch data initially
    this.FetchCart();
    // Set interval to fetch data every 5 seconds
    this.intervalId = setInterval(this.FetchCart, 500);
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  },
  methods: {
    FetchCart() {
      const SavedCart = localStorage.getItem("Cart");
      if (SavedCart) {
        this.ListCart = JSON.parse(SavedCart);
      }
    },
    PushRouter() {
      this.menu = false;
      router.push({ name: "Cart" });
    },
  },
};
</script>
<style lang=""></style>
