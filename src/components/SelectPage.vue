<template>
  <div class="d-flex flex-wrap justify-center gap-3">
    <router-link to="/San-pham" style="text-decoration: none; color: inherit;">
      <v-sheet elevation="8" class="sheet rounded-xl" border rounded>
        <v-skeleton-loader class="d-flex align-center justify-center flex-wrap text-center mx-auto p-4 rounded-xl" type="article"
          :loading="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" class="text-teal-darken-1">
            <path fill="currentColor"
              d="M19.92 9.27c.05-.27.08-.51.08-.77s-.03-.5-.08-.77L23 8.5zm-5.23 3.65l.81 3.24l.81-3.24c-.26.05-.53.08-.81.08s-.55-.03-.81-.08m-2.99-2.03l-4.91 4.9l-.7-.7L1 20.17L3.83 23l5.08-5.09l-.7-.7l4.9-4.91c-.57-.36-1.05-.84-1.41-1.41m4.57-6.81L15.5 1l-.77 3.08c.27-.05.51-.08.77-.08s.5.03.77.08M8 8.5l3.08.77C11.03 9 11 8.76 11 8.5s.03-.5.08-.77zm10.63 1.54c.23-.46.37-.98.37-1.54s-.14-1.08-.37-1.54L21 3l-3.96 2.37c-.46-.23-.98-.37-1.54-.37s-1.08.14-1.54.37L10 3l2.37 3.96c-.23.46-.37.98-.37 1.54c0 1.93 1.57 3.5 3.5 3.5c.56 0 1.08-.14 1.54-.37L21 14z" />
          </svg>
          <h5 class="text text-teal-darken-1">Sản phẩm</h5>
        </v-skeleton-loader>
      </v-sheet>
    </router-link>


    <router-link to="/Giai-phap" style="text-decoration: none; color: inherit;">
      <v-sheet elevation="8" class="sheet rounded-xl" border rounded>
        <v-skeleton-loader class="d-flex align-center justify-center flex-wrap text-center mx-auto p-4 rounded-xl" type="article"
          :loading="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" class="text-teal-darken-1">
            <path fill="currentColor"
              d="M4 6h2v12H4zm3 0h1v12H7zm2 0h3v12H9zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h1v12h-1zM2 4v4H0V4a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4h4v2H2a2 2 0 0 1-2-2v-4zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2z" />
          </svg>
          <h5 class="text text-teal-darken-1">Giải pháp</h5>
        </v-skeleton-loader>        
      </v-sheet>
    </router-link>

    <router-link to="/Thue-may" style="text-decoration: none; color: inherit;">
      <v-sheet elevation="8" class="sheet rounded-xl" border rounded>
        <v-skeleton-loader class="d-flex align-center justify-center flex-wrap text-center mx-auto p-4 rounded-xl" type="article"
          :loading="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" class="text-teal-darken-1">
            <path fill="currentColor"
              d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M13 20H2v-2c0-2.2 3.6-4 8-4c.5 0 1 0 1.4.1c-.3.6-.4 1.2-.4 1.9c0 1.6.8 3.1 2 4M10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4" />
          </svg>
          <h5 class="text text-teal-darken-1">Thuê máy</h5>
        </v-skeleton-loader>         
      </v-sheet>
    </router-link>

    <router-link to="/Lien-he" style="text-decoration: none; color: inherit;">
      <v-sheet elevation="8" class="sheet rounded-xl" border rounded>
        <v-skeleton-loader class="d-flex align-center justify-center flex-wrap text-center mx-auto p-4 rounded-xl" type="article"
          :loading="loading">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" class="text-teal-darken-1">
            <path fill="currentColor"
              d="M20 17.5V21c0 .55-.45 1-1 1C9.61 22 2 14.39 2 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1l-2.2 2.21c1.44 2.84 3.76 5.15 6.59 6.59l2.2-2.2c.28-.27.67-.35 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1m-4-10h-3.5L18 2l-1-1l-5.5 5.5V3H10v6h6zM17 6v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6z" />
          </svg>
          <h5 class="text text-teal-darken-1">Hỗ trợ 24/7</h5>
        </v-skeleton-loader> 
      </v-sheet>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
};
</script>

<style scoped>
.text {
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .sheet {
    width: 150px;
    height: 150px;
  }

  .text {
    font-size: 14px;
  }

}

@media only screen and (max-width: 800px) {
  .sheet {
    width: 150px;
    height: 150px;
  }

  .text {
    font-size: 18px;
  }

}

@media only screen and (min-width: 800px) {
  .sheet {
    width: 200px;
    height: 200px;
  }

  .text {
    font-size: 18px;
  }

}
</style>
