<template>
    <section class="about-us">
        <div class="row p-4">
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/Product/Linx8900.png">
            </div>
            <div class="col-12 col-sm-6">
                <h1>Máy In Linx 8900 Series</h1>
                <v-list density="compact">
                    <v-list-item v-for="(item, i) in Linx8900" :key="i" :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </div>
        </div>
        <div class="row p-4 mt-3">            
            <div class="col-12 col-sm-6">
                <h1>Máy In Linx 7900</h1>
                <v-list density="compact">
                    <v-list-item v-for="(item, i) in Linx7900" :key="i" :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </div>
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/Product/Linx7900.png">
            </div>
        </div>
        <div class="row p-4 mt-3">
            <div class="col-6">
                <img class="float-lg-right" src="../assets/Image/Product/Linx5900.png">
            </div>
            <div class="col-12 col-sm-6">
                <h1>Máy In Linx 5900</h1>
                <v-list density="compact">
                    <v-list-item v-for="(item, i) in Linx8900" :key="i" :value="item" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                        </template>

                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            Linx8900: [
                {
                    title: "Truy cập, điều khiển và hỗ trợ từ xa với Linx PrinterNet.",
                    icon: 'mdi-check'
                },
                {
                    title: "Được thiết kế để hỗ trợ mã hóa không có lỗi.",
                    icon: 'mdi-check'
                },
                {
                    title: "Thao tác nhanh chóng với giao diện màn hình cảm ứng đơn giản.",
                    icon: 'mdi-check'
                },
                {
                    title: "Bao bì chính và phụ với một máy in.",
                    icon: 'mdi-check'
                }
            ],
            Linx7900: [
                {
                    title: "Truy cập, điều khiển và hỗ trợ từ xa với Linx PrinterNet.",
                    icon: 'mdi-check'
                },
                {
                    title: "Hệ thống làm sạch đầu in tự động đảm bảo khởi động không gặp sự cố",
                    icon: 'mdi-check'
                },
                {
                    title: "Thiết lập mã tự động để mã hóa nhanh hơn, không có lỗi",
                    icon: 'mdi-check'
                }
            ],
            Linx5900: [
                {
                    title: "Truy cập, điều khiển và hỗ trợ từ xa với Linx PrinterNet.",
                    icon: 'mdi-check'
                },
                {
                    title: "Hệ thống làm sạch đầu in tự động đảm bảo khởi động không gặp sự cố",
                    icon: 'mdi-check'
                },
                {
                    title: "Thiết lập mã tự động để mã hóa nhanh hơn, không có lỗi",
                    icon: 'mdi-check'
                }
            ]
        }
    },
}
</script>
  
<style scoped>
.about-us img {
    width: 90%;
    min-width: 380px;
}
</style>
  