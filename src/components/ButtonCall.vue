<template lang="">
  <div class="position-fixed bottom-0 end-0 position">
    <div class="text-center">
      <v-speed-dial location="center" transition="fade-transition">
        <template v-slot:activator="{ props: activatorProps }">
          <v-fab v-bind="activatorProps" size="large" icon="$vuetify"></v-fab>
        </template>

        <v-btn key="1" icon="$success"></v-btn>
        <v-btn key="2" icon="$info"></v-btn>
        <v-btn key="3" icon="$warning"></v-btn>
        <v-btn key="4" icon="$error"></v-btn>
      </v-speed-dial>
    </div>
  </div>
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
