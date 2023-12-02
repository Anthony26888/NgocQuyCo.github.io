<template>
    <section class="about-us">
        <div class="row p-4">
            <div class="col-6">
                <img class=" z-3 float-lg-right" src="../assets/Image/product-homepage.png">
                <img class="z-1 position-absolute" src="../assets/Image/Shadow-Bg.png" alt="" srcset="">
            </div>
            <div class="col-12 col-sm-6 mb-3">
                <h1 class="text-primary">Các sản phẩm</h1>
                <span class="text-muted">{{ title1 }}</span><br>
                <v-btn color="info" class="mt-3">Tìm sản phẩm</v-btn>
            </div>
        </div>
        <div class="row p-4 mt-3">
            <div class="col-12 col-sm-6 mb-3">
                <h1 class="text-primary">Các giải pháp ứng dụng</h1>
                <span class="text-muted">{{ title2 }}</span><br>
                <v-btn color="info" class="mt-3">Xem chi tiết</v-btn>
            </div>
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/solution-homepage.webp">
            </div>
        </div>
        <div class="row p-4 mt-3">
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/muc-homepage.jpg">
            </div>
            <div class="col-12 col-sm-6 mb-3">
                <h1 class="text-primary">Các sản phẩm</h1>
                <span class="text-muted">{{ title3 }}</span><br>
                <v-btn color="info" class="mt-3">Xem chi tiết</v-btn>
            </div>
        </div>
        <div class="row p-4 mt-3">
            <div class="col-12 col-sm-6 mb-3">
                <h1 class="text-primary">BẢO TRÌ MÁY IN</h1>
                <span class="text-muted">{{ title4 }}</span><br>
                <v-btn color="info" class="mt-3">Xem chi tiết</v-btn>
            </div>
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/maintenance-homepage.png">
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            title1: "Các sản phẩm mã hóa và đánh dấu công nghiệp của Linx nổi tiếng về tính dễ sử dụng, độ tin cậy và chi phí sở hữu thấp.",
            title2:"Khám phá cách các giải pháp mã hóa và in phun của Linx có thể đáp ứng nhu cầu ứng dụng vật liệu hoặc ngành cụ thể của bạn.",
            title3:"Mực in Linx được sản xuất theo các quy trình và kiểm soát đảm bảo chất lượng nghiêm ngặt, giúp tăng độ bề và tuổi thọ của máy in tối đa",
            title4:"Việc đảm bảo hiệu suất hoạt động liên tục của các thiết bị trên dây chuyền sản xuất là tối quan trọng. Vận hành, bảo trì, bảo dưỡng máy in vô cùng cần thiết đảm bảo hạn chế tối đa tình trạng downtime cho máy in trục trặc."
        }
    },
}
</script>
  
<style scoped>
.about-us img {
    width: 90%;
    min-width: 380px;
}
.shadow{
    width: 500px;
    height: 100px;
}
</style>
  