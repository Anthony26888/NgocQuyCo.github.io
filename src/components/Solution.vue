<template lang="">
  <v-main>
    <div class="container-fluid">
      <div class="banner">
        <img
          src="../assets/Image/solution.webp"
          alt="Cinque Terre"
          
          class="banner-img"
        />
        <div class="center text-teal-accent-4"><strong>Giải pháp</strong></div>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center p-3">
        <div class="card" v-for="value in item">
          <img class="card-img-top card-img" :src="'src/assets/Image/Solution/' + value.image" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">{{value.title}}</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      item:[
        {title:"XE HƠI", description:"Giải pháp in và truy vết thông tin lên các chi tiết, linh kiện của xe hơi, xe máy", image:"xehoi.webp"},
        {title:"ĐỒ UỐNG", description:"Máy mã hóa đồ uống chuyên dụng với xếp hạng IP55 và IP65.", image:"douong.png"},
        {title:"HÓA CHẤT", description:"Hoạt động hoàn hảo cho các doanh nghiệp sản xuất sản phẩm ngành Hóa chất.", image:"hoachat.webp"},        
        {title:"XÂY DỰNG", description:"Các giải pháp mã hóa và đánh dấu cho ngành xây dựng.", image:"xaydung.webp"},
        {title:"MỸ PHẨM", description:"Các giải pháp của chúng tôi giúp giảm chi phí sản xuất.", image:"mypham.png"},
        {title:"THIẾT BỊ ĐIỆN TỬ", description:"Các giải pháp phù hợp cho sản xuất bảng mạch.", image:"thietbidientu.png"},
        {title:"DƯỢC PHẨM", description:"Mã chính xác và dễ đọc cho dây chuyền sản xuất tốc độ cao.", image:"duocpham.png"},
        {title:"DÂY VÀ CÁP ĐIỆN", description:"In thông số chính xác với tốc độ cao lên các loại dây và cáp điện.", image:"daydien.webp"},
      ]
    }
  },
};
</script>
<style scoped>
.banner {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
}

.banner-img {
  width: 100%;
  height: 300px;
  filter: grayscale(100%);
  object-fit: cover;
}

strong {
  font-weight: 700;
  font-size: 50px;
}

.card-img card{
  width: 380px;
  height: 380px;
}

</style>
