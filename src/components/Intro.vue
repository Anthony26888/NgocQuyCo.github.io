<template lang="">
  <v-card variant="text">
    <v-card-title>
      <p class="display-6 text-center text-teal-darken-1 text-wrap">
         Giới thiệu
      </p>
    </v-card-title>
    <v-card-text>
      <v-row cols="auto">
        <v-col>
          <v-img
            src="/src/assets/Image/Banner/Banner-1.png"
            height="300"
          ></v-img>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Ngọc Quý Technology</v-card-title>
            <v-card-text>
              <p>
                {{ row1 }}
              </p>
              <p>
                {{ row2 }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row cols="auto">
        <v-col>
          <v-card>
            <v-card-title
              >Quyền lợi khi đến với Ngọc Quý Technology</v-card-title
            >
            <v-card-text>
              <p>
                {{ row3 }}
              </p>
              <v-list>
                <v-list-item v-for="item in list" :key="item">
                  <v-icon
                    size="large"
                    color="green-darken-2"
                    icon="mdi-circle-small"
                  ></v-icon>
                  <b>{{ item }}</b>
                </v-list-item>
              </v-list>
              <p>
                {{ row4 }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-img
            src="/src/assets/Image/Banner/loi-ich.jpg"
            height="300"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    row1: "Lời nói đầu, Công ty TNHH Ngọc Quý Technology xin gửi lời cảm ơn chân thành tới quý khách hàng đã và đang đồng hành cùng chúng tôi trong suốt thời gian qua. Là một công ty hoạt động về lĩnh vực in phun mã hóa công nghiệp, với mong muốn phục vụ khách hàng tốt nhất. Với đội ngũ kỹ thuật chuyên sâu, chuyên viên trong ngành in phun lâu năm được đào tạo từ chuyên gia nước ngoài. Công ty TNHH Ngọc Quý Technology luôn đưa ra giải pháp tốt - tiết kiệm - bền bỉ lâu dài nhất.",
    row2: "Đến với chúng tôi, quý khách hàng sẽ được trải nghiệm những dịch vụ tốt nhất, hoàn hảo nhất với giá cạnh tranh nhất. Quý khách hàng có thể hoàn yên tâm với dịch vụ 24/7 của chúng tôi. Với sứ mệnh đáp ứng mọi nhu cầu in date code…. nhằm nâng cao giá trị sản phẩm của quý khách hàng, chúng tôi sẽ mang đến cho khách hàng những gì tốt nhất.",
    row3: "Đến với Công ty TNHH Ngọc Quý Technology, quý khách hàng sẽ nhận được những lợi ích sau:",
    list: [
      "Trải nghiệm dòng sản phẩm chất lượng cao.",
      "Được sử dụng sản phẩm với mức giá tiết siêu kiệm.",
      "Luôn hướng đến những giải pháp tối ưu nhất cho khách hàng.",
      "Đội ngũ nhân viên tư vấn, giải đáp nhiệt tình. Hỗ trợ kỹ thuật 24/7.",
    ],
    row4: "Hãy liên hệ Công ty TNHH Ngọc Quý Technology nếu bạn đang cần nâng cao năng suất, nâng cấp sản phẩm và thiết bị.",
    name: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NGỌC QUÝ",
    local: "102/9/2D Đường 100 Bình Thới, Phường 14, Quận 11, TP.Hồ Chí Minh",
    phone: "0918504086 - 0903062501",
    website: "ngocquytechco.com.vn",
    fanpage: "Máy in phun công nghiệp- Ngọc Quý",
    loading: true,
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
<style scoped>
h1,
h6 {
  font-weight: 700;
}
@media only screen and (min-width: 300px) {
  h1 {
    font-size: 18px;
  }
}

@media only screen and (min-width: 700px) {
  h1 {
    font-size: 20px;
  }
}

@media only screen and (min-width: 1024px) {
  h1 {
    font-size: 25px;
  }
}

@media only screen and (min-width: 1440px) {
  h1 {
    font-size: 30px;
  }
}

@media only screen and (min-width: 1920px) {
  h1 {
    font-size: 40px;
  }
}
</style>
