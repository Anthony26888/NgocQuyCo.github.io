<template lang="">
  <div class="position-fixed bottom-0 end-0 position">
    <div class="text-center">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            class="btn-call"
            color="teal-lighten-4"
            icon="mdi-phone"
            v-bind="props"
            :loading="loading"
            @click="load"
          ></v-btn>
        </template>

        <v-card class="mb-3">
          <v-list>
            <v-list-item
              prepend-avatar="../assets/Image/logoNG.png"
              title="Mr.Hải"
              subtitle="CEO của Ngọc Quý"
            >
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-icon class="text-teal-darken-1">mdi-phone</v-icon>
              <a
                class="ms-2"
                style="text-decoration: none; color: blue"
                href="tel:+84918504086"
                ><b>0918504086</b></a
              >
            </v-list-item>

            <v-list-item>
              <v-icon class="text-teal-darken-1">mdi-phone</v-icon>
              <a
                class="ms-2"
                style="text-decoration: none; color: blue"
                href="tel:+84903062501"
                ><b>0903062501</b></a
              >
            </v-list-item>

            <v-list-item>
              <div class="d-flex">
                <div>
                  <v-img
                    src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"
                    width="30"
                  ></v-img>
                </div>
                <a
                  class="ms-2"
                  style="text-decoration: none; color: blue"
                  href="https://zalo.me/0903062501"
                  ><b>0903062501</b></a
                >
              </div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
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
        }
    },

    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 1000)
        },
    },
}
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
