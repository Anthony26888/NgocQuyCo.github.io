<template lang="">
  <v-main class="">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="w-100 mt-5" >
            <v-card-item class="mx-auto">
              <h1>{{ Info}}</h1>

              <v-card-subtitle>This is a subtitle</v-card-subtitle>
            </v-card-item>

            <v-card-text> This is content </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <img
            src="../assets/Image/Product/Linx8900.png"
            alt=""
            srcset=""
            cover
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
export default {
  components: "InfoProduct",
  setup() {
    const store = useAppStore();
    const { Info } = storeToRefs(store)
    return { Info }
  }

};
</script>
<style scoped>
img {
  width: 100%;
  height: 100vh;
}
</style>
