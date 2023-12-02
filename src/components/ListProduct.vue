<template>
    <v-app id="inspire">
        <v-main class="bg-light">
            <v-container>
                <div>
                    <strong>Máy In Linx CIJ</strong>
                    <div class="d-flex flex-wrap gap-3">
                        <v-card class="card mt-3" v-for="value in store.Linx" :key="value">
                            <v-img class="w-100" height="200" :src="'/src/assets/Image/Product/' + value.img" fill>

                            </v-img>

                            <v-card-subtitle class="pt-4">
                                {{ value.model }}
                            </v-card-subtitle>

                            <v-card-text>
                                <h6>{{ value.name }}</h6>

                            </v-card-text>

                            <v-card-actions>
                                <router-link to="/Thong-tin-san-pham" class="mx-auto">
                                    <v-btn color="info"  @click="store.GetInfo(value.id)">
                                        Xem chi tiết
                                    </v-btn>
                                </router-link>

                            </v-card-actions>
                        </v-card>
                    </div>
                </div>

                <div class="mt-3">
                    <strong>Máy In Hitachi CIJ</strong>
                    <div class="d-flex flex-wrap gap-3">
                        <v-card class="card mt-3" v-for="value in store.Hitachi" :key="value">
                            <v-img class="w-100" height="200" :src="'/src/assets/Image/Product/' + value.img" fill>

                            </v-img>

                            <v-card-subtitle class="pt-4">
                                {{ value.model }}
                            </v-card-subtitle>

                            <v-card-text>
                                <h6>{{ value.name }}</h6>

                            </v-card-text>

                            <v-card-actions>
                                <router-link to="/Thong-tin-san-pham" class="mx-auto">
                                    <v-btn color="info"  @click="store.GetInfo(value.id)">
                                        Xem chi tiết
                                    </v-btn>
                                </router-link>
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>

            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();


</script>

<script>

export default {

}
</script>
<style scoped>
.card {
    width: 250px;
}
</style>
