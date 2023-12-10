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
      <div class="d-flex justify-content-center p-3 flex-wrap">
        <v-card class="mx-auto mt-3" max-width="300" v-for="value in item">
          <v-img
            class="align-end text-white"
            height="200"
            :src="'/src/assets/Image/Solution/' + value.image"
            cover
          >
          </v-img>

          <v-card-text class="text-center text-teal-accent-4"
            ><h4>{{ value.title }}</h4>
          </v-card-text>
          <v-card-text>
            <div class="w-100 text-center">{{ value.description }}</div>
          </v-card-text>
        </v-card>
      </div>
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col p-5 bg-teal-accent-4">
          <h1>Hãy để lại thông tin</h1>
          <div class="d-flex mt-3">
            <v-icon
              size="large"
              color="light"
              icon="mdi-phone"
              class="mt-3"
            ></v-icon>
            <div class="d-flex flex-column ms-3">
              <span class="fs-5">Mr.Hải</span>
              <span class="fs-5">0918504086</span>
            </div>
          </div>
          <div class="d-flex mt-3">
            <v-icon
              size="large"
              color="light"
              icon="mdi-clock"
              class="mt-3"
            ></v-icon>
            <div class="d-flex flex-column ms-3">
              <span class="fs-5">Thời gian làm việc</span>
              <span class="fs-5">8:00 - 17:00 (Thứ 2 - Thứ 6)</span>
            </div>
          </div>
        </div>
        <div class="col">
          <form>
            <div class="mb-3 row p-5">
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  name="inputName"
                  id="inputName"
                  placeholder="Họ tên"
                />

                <input
                  type="email"
                  class="form-control mt-3"
                  name="inputName"
                  id="inputName"
                  placeholder="Email"
                />
              </div>
              <div class="col-6">
                <input
                  type="num"
                  class="form-control"
                  name="inputName"
                  id="inputName"
                  placeholder="Số điện thoại"
                />
                <input
                  type="text"
                  class="form-control mt-3"
                  name="inputName"
                  id="inputName"
                  placeholder="Tên công ty"
                />
              </div>
              <div class="col-12 mt-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>
              <div class="col-12 mt-3">
                <VBtn class="w-100 bg-teal-accent-4">Gửi thông tin</VBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          title: "XE HƠI",
          description:
            "Giải pháp in và truy vết thông tin lên các chi tiết, linh kiện của xe hơi, xe máy",
          image: "xehoi.webp",
        },
        {
          title: "ĐỒ UỐNG",
          description:
            "Máy mã hóa đồ uống chuyên dụng với xếp hạng IP55 và IP65.",
          image: "douong.png",
        },
        {
          title: "HÓA CHẤT",
          description:
            "Hoạt động hoàn hảo cho các doanh nghiệp sản xuất sản phẩm ngành Hóa chất.",
          image: "hoachat.webp",
        },
        {
          title: "XÂY DỰNG",
          description: "Các giải pháp mã hóa và đánh dấu cho ngành xây dựng.",
          image: "xaydung.webp",
        },
        {
          title: "MỸ PHẨM",
          description:
            "Các giải pháp của chúng tôi giúp giảm chi phí sản xuất.",
          image: "mypham.png",
        },
        {
          title: "THIẾT BỊ ĐIỆN TỬ",
          description: "Các giải pháp phù hợp cho sản xuất bảng mạch.",
          image: "thietbidientu.png",
        },
        {
          title: "DƯỢC PHẨM",
          description:
            "Mã chính xác và dễ đọc cho dây chuyền sản xuất tốc độ cao.",
          image: "duocpham.png",
        },
        {
          title: "DÂY VÀ CÁP ĐIỆN",
          description:
            "In thông số chính xác với tốc độ cao lên các loại dây và cáp điện.",
          image: "daydien.webp",
        },
        {
          title: "THỰC PHẨM",
          description:
            "Giải pháp cho nhãn giấy, bìa cứng và bao bì nhựa, chai lọ.",
          image: "thucpham.png",
        },
      ],
    };
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
</style>
