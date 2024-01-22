<template lang="">
  <div class="d-flex justify-content-center flex-wrap">
    <v-card
      class="mx-auto mt-3 bg-grey-lighten-4 card"      
      v-for="value in item"
    >
      <v-img class="align-end text-white img" height="200" :src="value.image" cover>
      </v-img>

      <v-card-text class="text-center text-teal-accent-4 title-name"
        ><h4>{{ value.title }}</h4>
      </v-card-text>
      <v-card-text>
        <div class="w-100 text-center">{{ value.description }}</div>
      </v-card-text>
    </v-card>
  </div>

  <div class="row justify-content-center align-items-center mt-5">
    <div class="col col-sm-12 col-md-6 p-5 bg-teal-accent-4">
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
    <div class="col col-sm-12 col-md-6">
      <!--Form Contact-->
      <v-card class="mt-5 bg-teal-lighten-5">
        <Form />
      </v-card>
    </div>
  </div>
</template>
<script setup>
import Form from "./Form.vue";
</script>
<script>
import { ref } from "vue";
import { useAppStore } from "@/store/complaint.js";

export default {
  components: "Solution",
  setup() {
    const store = useAppStore();
    const LastName = ref("");

    function addItem() {
      if (!LastName) {
        store.AddComplaint(LastName.value);
      }
    }
    return { addItem, LastName };
  },
  data() {
    return {
      item: [
        {
          title: "XE HƠI",
          description:
            "Giải pháp in và truy vết thông tin lên các chi tiết, linh kiện của xe hơi, xe máy",
          image:
            "https://linx.com.vn/wp-content/uploads/2020/11/linx-in-len-thiet-bi-phu-tung-xe-hoi-2.webp",
        },
        {
          title: "ĐỒ UỐNG",
          description:
            "Máy mã hóa đồ uống chuyên dụng với xếp hạng IP55 và IP65.",
          image: "https://linx.com.vn/wp-content/uploads/2020/11/softdrink.png",
        },
        {
          title: "HÓA CHẤT",
          description:
            "Hoạt động hoàn hảo cho các doanh nghiệp sản xuất sản phẩm ngành Hóa chất.",
          image:
            "https://linx.com.vn/wp-content/uploads/2020/11/ung-dung-linx-8-scaled.webp",
        },
        {
          title: "XÂY DỰNG",
          description: "Các giải pháp mã hóa và đánh dấu cho ngành xây dựng.",
          image:
            "https://linx.com.vn/wp-content/uploads/2020/11/in-len-ong-thep-01.webp",
        },
        {
          title: "MỸ PHẨM",
          description:
            "Các giải pháp của chúng tôi giúp giảm chi phí sản xuất.",
          image: "https://linx.com.vn/wp-content/uploads/2020/11/my-pham.png",
        },
        {
          title: "THIẾT BỊ ĐIỆN TỬ",
          description: "Các giải pháp phù hợp cho sản xuất bảng mạch.",
          image:
            "https://linx.com.vn/wp-content/uploads/2022/09/thietbidientu.png",
        },
        {
          title: "DƯỢC PHẨM",
          description:
            "Mã chính xác và dễ đọc cho dây chuyền sản xuất tốc độ cao.",
          image: "https://linx.com.vn/wp-content/uploads/2022/09/duocpham.png",
        },
        {
          title: "DÂY VÀ CÁP ĐIỆN",
          description:
            "In thông số chính xác với tốc độ cao lên các loại dây và cáp điện.",
          image:
            "https://linx.com.vn/wp-content/uploads/2022/09/in-thong-tin-len-day-cap-linx-11.webp",
        },
        {
          title: "THỰC PHẨM",
          description:
            "Giải pháp cho nhãn giấy, bìa cứng và bao bì nhựa, chai lọ.",
          image: "https://linx.com.vn/wp-content/uploads/2022/09/thupham.png",
        },
        {
          title: "THIẾT BỊ Y TẾ",
          description: "Đáp ứng các yêu cầu quy định với mã số.",
          image:
            "https://linx.com.vn/wp-content/uploads/2022/09/thietbiyte.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
@media only screen and (min-width: 300px) {
  .card {
    max-width: 170px;
  }

  .img {
    width: 170px;
    height: 200px;
  }

  .title-name {
    font-size: 15px;
  }

  .title-price {
    font-size: 12px;
  }
}



@media only screen and (min-width: 500px) {
  .card {
    max-width: 310px;
  }

  .img {
    width: 310px;

  }
}

@media only screen and (min-width: 800px) {
  .card {
    max-width: 325px;
  }

  .img {
    width: 325px;

  }
}
</style>
