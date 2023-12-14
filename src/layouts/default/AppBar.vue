<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" style="text-decoration: none">
        <v-img src="../../assets/Image/logoNG.png" :width="120" :height="70"></v-img>
      </router-link>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-item-end" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page">Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Liên hệ</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Sản phẩm</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Máy in Linx</a>
              <a class="dropdown-item" href="#">Máy in Hitachi</a>
            </div>
          </li>
        </ul>        
      </div>
    </div>
  </nav>
</template>
<style scoped>
.logo{
  font-family: Inter;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { text: 'Men', icon: 'mdi-folder' },
        { text: 'Women', icon: 'mdi-account-multiple' },
        { text: 'Kids', icon: 'mdi-star' },
        { text: 'Accessory', icon: 'mdi-history' }
        
      ],
    };
  },
};
</script>
