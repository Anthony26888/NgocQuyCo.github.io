<template lang="">
  <div class="mx-auto">
    <h1 class="text-center text-teal-darken-1">
      CÔNG TY TNHH NGỌC QUÝ TECHNOLOGY
    </h1>
    <div class="mt-5">
      <p>
        Lời nói đầu, Công ty TNHH Ngọc Quý Technology xin gửi lời cảm ơn chân
        thành tới quý khách hàng đã và đang đồng hành cùng chúng tôi trong suốt
        thời gian qua. Là một công ty hoạt động về lĩnh vực in phun mã hóa công
        nghiệp, với mong muốn phục vụ khách hàng tốt nhất. Với đội ngũ kỹ thuật
        chuyên sâu, chuyên viên trong ngành in phun lâu năm được đào tạo từ
        chuyên gia nước ngoài. Công ty T.V.N luôn đưa ra giải pháp tốt - tiết
        kiệm - bền bỉ lâu dài nhất.
      </p>
      <p>
        Đến với chúng tôi, quý khách hàng sẽ được trải nghiệm những dịch vụ tốt
        nhất, hoàn hảo nhất với giá cạnh tranh nhất. Quý khách hàng có thể hoàn
        yên tâm với dịch vụ 24/7 của chúng tôi. Với sứ mệnh đáp ứng mọi nhu cầu
        in date code…. nhằm nâng cao giá trị sản phẩm của quý khách hàng, chúng
        tôi sẽ mang đến cho khách hàng những gì tốt nhất.
      </p>

      <!--Timeline-->
      <v-timeline width="500">
        <v-timeline-item dot-color="purple-lighten-2" fill-dot>
          <v-card width="400">
            <v-card-title class="bg-purple-lighten-2">              
              <h2 class="font-weight-light">Chất lượng</h2>
            </v-card-title>
            <v-card-text>
              Trải nghiệm dòng sản phẩm chất lượng cao.
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
          <v-card width="400">
            <v-card-title class="bg-amber-lighten-1 justify-end">
              <h2 class="me-4 font-weight-light">Giá cả hợp lý</h2>              
            </v-card-title>
            <v-card-text>
              Được sử dụng sản phẩm với mức giá tiết siêu kiệm.
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
          <v-card width="400">
            <v-card-title class="bg-cyan-lighten-1">             
              <h2 class="font-weight-light">Giải pháp</h2>
            </v-card-title>
            <v-card-text>
              Luôn hướng đến những giải pháp tối ưu nhất cho khách hàng
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
          <v-card width="400">
            <v-card-title class="bg-red-lighten-1 justify-end">
              <h2 class="me-4 font-weight-light">Dịch vụ</h2>
              <v-icon size="large" icon="mdi-account-multiple-outline"></v-icon>
            </v-card-title>
            <v-card-text>
              Đội ngũ nhân viên tư vấn, giải đáp nhiệt tình. Hỗ trợ kỹ thuật
              24/7
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-book-variant",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-layers-triple",
      },
    ],
  }),
};
</script>
<style lang=""></style>
