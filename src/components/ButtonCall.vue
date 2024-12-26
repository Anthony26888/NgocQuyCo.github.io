<template lang="">
  <v-btn
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
  >ZALO</v-btn>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      loading: false,
      menu: false,
    };
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 1000);
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 700px) {
  .btn-active {
    width: 20px;
    height: 20px;
  }

  .position {
    padding: 20px 20px;
  }
}

@media only screen and (min-width: 700px) {
  .btn-active {
    width: 30px;
    height: 30px;
  }

  .position {
    padding: 30px 30px;
  }
}
</style>
