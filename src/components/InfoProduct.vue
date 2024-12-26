<template lang="">
  <v-card variant="text" :width="WidthCard" class="mx-auto">
    <v-row justify="center">
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <v-card>
          <v-img
            v-if="ImageLarge == ''"
            :src="`/src/assets/Image/Product/${InformationProduct.imgDetail[0]}`"
            :width="WidthImgLarge"
            :height="HeightImgLarge"
            cover
          ></v-img>
          <v-img
            v-else
            :src="`/src/assets/Image/Product/${ImageLarge}`"
            :width="WidthImgLarge"
            :height="HeightImgLarge"
            cover
          >
          </v-img>
        </v-card>
        <v-item-group selected-class="bg-primary">
          <v-container>
            <v-row
              cols="auto"
              justify="center"
              class="mt-2"
              :width="WidthImgLarge"
            >
              <v-col cols="3" v-for="item in InformationProductImg" :key="item">
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card
                    :border="isSelected ? 'success md' : false"
                    @click="toggle"
                  >
                    <v-img
                      :src="`/src/assets/Image/Product/${item}`"
                      cover
                      :height="HeightImgSmall"
                      :width="WidthImgSmall"
                      @click="ChangeImg(item)"
                    ></v-img>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-col>
      <v-col col="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <v-card variant="text">
          <v-card-title class="text-h4">
            {{ InformationProduct.name }}
          </v-card-title>
          <v-card-text>
            <p class="text-h5 text-danger">Giá: Liên hệ</p>

            <v-card-actions>
              <v-btn
                size="large"
                variant="outlined"
                class="text-capitalize"
                color="primary"
                @click="store.AddCart($route.params.id)"
                ><v-icon>mdi mdi-cart</v-icon>Đặt ngay</v-btn
              >
            </v-card-actions>
            <p class="text-overline font-weight-bold adj">Đặc điểm:</p>
            {{ InformationProduct.description }}
            <p class="text-overline font-weight-bold adj">Công nghệ:</p>
            <p v-for="item in InformationProduct.tech" :key="item">
              <v-icon color="success">mdi mdi-check</v-icon> {{ item }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-row cols="auto">
          <v-col cols="8">
            <v-card height="400px">
              <v-card-title
                ><h3 class="text-h4 text-capition">Đặc tính</h3></v-card-title
              >
              <v-card-text>
                <v-table height="400px">
                  <thead>
                    <tr>
                      <th class="text-left font-weight-bold">Thuộc tính</th>
                      <th class="text-left font-weight-bold">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in InformationProductTable" :key="item">
                      <td>{{ item.name }}</td>
                      <td>{{ item.detail }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <p class="text-muted text-center mt-5" v-if="InformationProductTable.length == 0">Chưa có thông tin</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="text-h4" title="Nhận xét" height="400px">
              <v-card-text>
                <v-list
                  lines="three"
                  v-for="item in InformationProductReview"
                  :key="item"
                  prepend="mdi mdi-account-circle"
                >
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon size="x-large">mdi mdi-account-circle</v-icon>
                    </template>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-rating
                        half-increments
                        readonly
                        :length="5"
                        :size="18"
                        :model-value="item.star"
                        color="warning"
                        active-color="warning"
                      />
                    </v-list-item-subtitle>
                    <v-list-item-text>{{ item.text }}</v-list-item-text>
                  </v-list-item>

                </v-list>
                <p class="text-muted text-center mt-5" v-if="InformationProductReview.length == 0">Chưa có nhận xét</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
  <SlideProduct v-if="InformationProductType == 'printer'" />
  <SlideMaterial v-else-if="InformationProductType == 'material'" />
  <SlideAccessory v-else />
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { useAppStore } from "@/store/app";

import SlideProduct from "@/components/SlideProductLanding.vue";
import SlideAccessory from "@/components/SlideAccessoryLanding.vue";
import SlideMaterial from "@/components/SlideMaterialLanding.vue";

const { name } = useDisplay();

const HeightImgSmall = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 100;
    case "sm":
      return 100;
    case "md":
      return 100;
    case "lg":
      return 100;
    case "xl":
      return 100;
  }

  return undefined;
});
const WidthImgSmall = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 100;
    case "sm":
      return 100;
    case "md":
      return 100;
    case "lg":
      return 100;
  }

  return undefined;
});
const WidthImgLarge = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "md":
      return 500;
    case "lg":
      return 500;
    case "xl":
      return 500;
  }

  return undefined;
});
const HeightImgLarge = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 400;
    case "sm":
      return 400;
    case "md":
      return 450;
    case "lg":
      return 450;
    case "xl":
      return 450;
  }

  return undefined;
});
const WidthCard = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "md":
      return 600;
    case "lg":
      return 1000;
    case "xl":
      return 1100;
  }

  return undefined;
});
</script>
<script>
const store = useAppStore();
export default {
  data() {
    return {
      ImageLarge: "",
      InformationProduct: [],
      InformationProductImg: [],
      InformationProductReview: [],
      InformationProductTable: [],
      InformationProductType: "",
      intervalId: null,
    };
  },
  mounted() {
    this.FetchProduct();
    this.intervalId = setInterval(this.FetchProduct, 1000);
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId);
  },
  methods: {
    ChangeImg(item) {
      this.ImageLarge = item;
    },
    async FetchProduct() {
      try {
        const res = await fetch(
          `${store.Url}/data/product/${this.$route.params.id}`
        );
        this.InformationProduct = await res.json();
        this.InformationProductImg = this.InformationProduct.imgDetail;
        this.InformationProductReview = this.InformationProduct.review;
        this.InformationProductTable= this.InformationProduct.table;
        this.InformationProductType = this.InformationProduct.type
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
<style scoped>
.adj {
  margin-bottom: -10px;
}
</style>
