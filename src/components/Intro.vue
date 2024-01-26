<template lang="">
  <div class="mx-auto container">
    <h1 class="text-center text-teal-darken-1">
      CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY
    </h1>
    <div class="mt-5">
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
      <h5 class="text-teal-darken-1">{{ name }}</h5>
      <div class="d-flex gap-2">
        <b>Trụ sở: </b>
        <p>{{ local }}</p>
      </div>
      <div class="d-flex gap-2">
        <b>Hotline: </b>
        <a href="tel:+84918504086">0918504086</a>
      </div>
      <div class="d-flex gap-2">
        <b>Website: </b>
        <a href="http://www.ngocquyco.com.vn">{{ website }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    row1: "Lời nói đầu, Công ty TNHH Ngọc Quý Technology xin gửi lời cảm ơn chân thành tới quý khách hàng đã và đang đồng hành cùng chúng tôi trong suốt thời gian qua. Là một công ty hoạt động về lĩnh vực in phun mã hóa công nghiệp, với mong muốn phục vụ khách hàng tốt nhất. Với đội ngũ kỹ thuật chuyên sâu, chuyên viên trong ngành in phun lâu năm được đào tạo từ chuyên gia nước ngoài. Công ty T.V.N luôn đưa ra giải pháp tốt - tiết kiệm - bền bỉ lâu dài nhất.",
    row2:"Đến với chúng tôi, quý khách hàng sẽ được trải nghiệm những dịch vụ tốt nhất, hoàn hảo nhất với giá cạnh tranh nhất. Quý khách hàng có thể hoàn yên tâm với dịch vụ 24/7 của chúng tôi. Với sứ mệnh đáp ứng mọi nhu cầu in date code…. nhằm nâng cao giá trị sản phẩm của quý khách hàng, chúng tôi sẽ mang đến cho khách hàng những gì tốt nhất.",
    row3:"Đến với Công ty T.V.N, quý khách hàng sẽ nhận được những lợi ích sau:",
    list:[
      "Trải nghiệm dòng sản phẩm chất lượng cao.",
      "Được sử dụng sản phẩm với mức giá tiết siêu kiệm.",
      "Luôn hướng đến những giải pháp tối ưu nhất cho khách hàng.",
      "Đội ngũ nhân viên tư vấn, giải đáp nhiệt tình. Hỗ trợ kỹ thuật 24/7."
    ],
    row4:"Hãy liên hệ Công ty T.V.N nếu bạn đang cần nâng cao năng suất, nâng cấp sản phẩm và thiết bị:",
    name:"CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY",
    local:"102/9/2D Đường 100 Bình Thới, Phường 14, Quận 11, TP.Hồ Chí Minh",
    phone:"0918504086",
    website:"ngocquyco.com.vn"
  }),
};
</script>
<style lang=""></style>
