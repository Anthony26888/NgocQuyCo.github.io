<template lang="">
  <v-card variant="text">
    <v-card-text>
      <v-row cols="auto" algin="center">
        <v-col cols="7">
          <v-card>
            <v-list lines="one" height="500">
              <v-list-item>
                <p
                  v-if="ListCart.length === 0"
                  class="text-muted text-center mx-auto mt-5"
                >
                  Chưa có sản phẩm
                </p>
              </v-list-item>
              <v-list-item v-for="(item, index) in ListCart" :key="index">
                <v-card color="#E0E0E0" rounded="2">
                  <div
                    class="d-flex flex-no-wrap justify-content-center align-items-center"
                  >
                    <v-avatar class="ma-3" rounded="0" size="125">
                      <v-img
                        :src="`/src/assets/Image/Product/${item.img}`"
                        class="ma-3"
                        rounded="2"
                        size="125"
                      ></v-img>
                    </v-avatar>
                    <div class="mt-3">
                      <v-card-title class="text-h5">
                        {{ item.name }}
                      </v-card-title>

                      <v-card-subtitle
                        >Thương hiệu:{{ item.brand }}</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-text-field
                          style="max-width: 120px"
                          class="centered-input"
                          :model-value="item.qty"
                          variant="text"
                          type="num"
                          append-icon="mdi mdi-plus"
                          @click:append="IncreaseQuantity(index)"
                          prepend-icon="mdi mdi-minus"
                          @click:prepend="DecrementQuantity(index)"
                        ></v-text-field>
                      </v-card-actions>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                      variant="text"
                      icon="mdi mdi-trash-can-outline"
                      @click="store.RemoveCart(index)"
                    ></v-btn>
                  </div>
                </v-card>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card height="500">
            <v-form
              @submit.prevent="store.SendCart(Email, FullName, Phone, Note)"
            >
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="Email"
                      :rules="emailRules"
                      label="E-mail"
                      hide-details
                      required
                      variant="solo-filled"
                      class="mt-2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="FullName"
                      :rules="nameRules"
                      :counter="10"
                      label="Họ và tên"
                      required
                      hide-details
                      variant="solo-filled"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="Phone"
                      :rules="nameRules"
                      :counter="10"
                      label="Số điện thoại"
                      required
                      hide-details
                      variant="solo-filled"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="Note"
                      label="Ghi chú"
                      variant="solo-filled"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  type="submit"
                  block
                  class="bg-teal-accent-4 text-caption"
                >
                  Gửi thông tin
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-dialog v-model="store.dialog" width="auto">
    <v-sheet
      class="pa-4 text-center mx-auto"
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
    >
      <v-icon
        class="mb-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      ></v-icon>

      <h2 class="text-h5 mb-6">Bạn đã đặt hàng thành công.</h2>

      <p class="mb-4 text-medium-emphasis text-body-2">
        Chúng tôi đã tiếp nhận thông tin đơn hàng và sẽ liên hệ sớm đến bạn.
      </p>

      <v-divider class="mb-4"></v-divider>

      <div class="text-end">
        <v-btn
          class="text-none"
          color="success"
          variant="flat"
          width="90"
          rounded
          @click="store.dialog = false"
        >
          Xong
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      ListCart: [],
      itervalId: "",
      Email: "",
      FullName: "",
      Phone: "",
      Note: "",
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
    SaveCart() {
      localStorage.setItem("Cart", JSON.stringify(this.ListCart));
    },
    IncreaseQuantity(index) {
      if (this.ListCart) {
        this.ListCart[index].qty++;
        this.SaveCart();
      }
    },
    DecrementQuantity(index) {
      if (this.ListCart[index].qty > 1) {
        this.ListCart[index].qty--;
        this.SaveCart();
      }
    },
  },
};
</script>
<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
