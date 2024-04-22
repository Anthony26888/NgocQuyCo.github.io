<template lang="">
  <v-skeleton-loader type="article, list-item-three-line, list-item-three-line, list-item-three-line, list-item-three-line, list-item-three-line" :loading="loading">
    <div class="mx-auto container">
      <h1 class="text-center text-teal-darken-1">
        CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NGỌC QUÝ
      </h1>
      <div class="mt-3">
        <p>
          {{ row1 }}
        </p>
        <p>
          {{ row2 }}
        </p>
        <p>
          {{ row3 }}
        </p>
        <!--List-->
        <v-list-item>
          <v-list-item v-for="item in list" :key="item">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-circle-small"
            ></v-icon>
            <b>{{ item }}</b>
          </v-list-item>
        </v-list-item>

        <p>
          {{ row4 }}
        </p>
        <h5 class="text-teal-darken-1 text-name mt-5">{{ name }}</h5>
        <div class="d-flex gap-2">
          <b>Trụ sở: </b>
          <p>{{ local }}</p>
        </div>
        <div class="d-flex gap-2">
          <b>Hotline: </b>
          <a
            href="tel:+84918504086"
            class="ms-2"
            style="text-decoration: none; color: blue"
          >
            <p>0918504086</p>
          </a>
          <span class="text-muted ms-2">hoặc</span>
          <a
            href="tel:+84903062501"
            class="ms-2"
            style="text-decoration: none; color: blue"
          >
            <p>0903062501</p>
          </a>
        </div>
        <div class="d-flex gap-2">
          <b>Website: </b>
          <a
            href="http://ngocquytechco.com.vn"
            style="text-decoration: none; color: blue"
            >{{ website }}</a
          >
        </div>

        <div class="d-flex gap-2 mt-3">
          <b>Fanpage: </b>
          <a
            href="https://www.facebook.com/people/M%C3%A1y-in-phun-c%C3%B4ng-nghi%E1%BB%87p-Ng%E1%BB%8Dc-Qu%C3%BD/61555545044060/?mibextid=kFxxJD"
            style="text-decoration: none; color: blue"
            >{{ fanpage }}</a
          >
        </div>
      </div>
    </div>
  </v-skeleton-loader>
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
