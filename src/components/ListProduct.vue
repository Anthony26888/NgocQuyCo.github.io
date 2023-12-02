<template>
    <v-app id="inspire">
        <v-main class="bg-light">
            <v-container>
                <v-row>
                    <v-col class="mt-2" cols="12">
                        <strong>Máy In Linx CIJ</strong>
                    </v-col>

                    <v-col cols="12" class=" ">
                        <div class="d-flex flex-wrap justify-content-start align-items-center">
                            <v-card class="mx-auto card" v-for="value in Linx" :key="value">
                                <v-img class="w-100" height="200" :src="'/src/assets/Image/Product/' + value.img" fill>

                                </v-img>

                                <v-card-subtitle class="pt-4">
                                    {{ value.model }}
                                </v-card-subtitle>

                                <v-card-text>
                                    <h6>{{ value.name }}</h6>

                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="info" class="mx-auto" @click="Detail(value.name)">
                                            Xem chi tiết
                                        </v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="mt-2" cols="12">
                        <strong>Máy In Hitachi CIJ</strong>
                    </v-col>

                    <v-col cols="12" class="">
                        <div class="d-flex flex-wrap justify-content-start align-items-center">
                            <v-card class="mx-auto card" v-for="value in Hitachi" :key="value">
                                <v-img class="w-100 image" height="200" :src="'/src/assets/Image/Product/' + value.img"
                                    fill>

                                </v-img>

                                <v-card-subtitle class="pt-4">
                                    {{ value.model }}
                                </v-card-subtitle>

                                <v-card-text>
                                    <h6>{{ value.name }}</h6>

                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="info" class="mx-auto">
                                        Xem chi tiết
                                    </v-btn>

                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

</script>

<script>
import axios from 'axios';
export default {
    data: () => ({
        drawer: null,
        Linx: [],
        Hitachi: [],
        stt:null
    }),
    mounted() {
        this.FetchLinx()
        this.FetchHitachi()
    },
    methods: {
        FetchLinx() {
            const url = "http://localhost:3000/product?model=Linx"
            axios.get(url).then((response) => {
                const data = response.data;
                this.Linx = data

            })
        },
        FetchHitachi() {
            const url = "http://localhost:3000/product?model=Hitachi"
            axios.get(url).then((response) => {
                const data = response.data;
                this.Hitachi = data

            })
        },
        Detail(data){
            this.stt = data
        }

    }
}
</script>
<style scoped>
.card {
    width: 250px;
}
</style>
