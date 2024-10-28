<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <h1 class="text-center text-danger">10</h1>
            <p :style="`font-size:${fontsize}px`" class="text-center">
              Năm thành lập
            </p>
          </v-col>
          <v-col class="text-center">
            <h1 class="text-center text-danger">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="200"
                :duration="3"
                prefix=""
                suffix="+"
                separator=""
                decimalSeparator=""
                :decimals="0"
                :autoinit="true"
              />
            </h1>
            <p :style="`font-size:${fontsize}px`" class="text-center">
              Khách hàng đồng hành
            </p>
          </v-col>
          <v-col class="text-center">
            <h1 class="text-center text-danger">300 +</h1>
            <p :style="`font-size:${fontsize}px`" class="text-center">
              Thiết bị đã bán ra
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
import Vue3autocounter from "vue3-autocounter";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const fontsize = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 6;
    case "sm":
      return 8;
    case "md":
      return 20;
    case "lg":
      return 24;
    case "xl":
      return 24;
    case "xxl":
      return 24;
  }

  return undefined;
});
</script>

<script>
export default {
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  mounted() {
    setTimeout(() => {
      const count = 0;
      this.n = count + 1;
    }, 100);
  },
  data() {
    return {
      n: 200,
    };
  },
};
</script>
<style scoped></style>
