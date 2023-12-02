<template lang="">
  <v-main class="">
    <v-container>
      <v-row>
        <v-col>
          <v-card
            loading
            title="Card title"
            subtitle="Subtitle"
            text="..."
            :elevation="3"
          ></v-card>
        </v-col>
        <v-col>
            <img src="../assets/Image/Product/Linx8900.png" alt="" srcset="" cover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            Item:[]
        }
    },
    mounted() {
       this.FetchData() 
    },
    methods: {
        FetchData(){
            const product = 
            const url = "http://localhost:3000/product?name="
            axios.get(url).then((response) => {
                const data = response.data;
                this.Item = data
            })
        }
    },
};
</script>
<style scoped>
    img{
        width: 100%;
        height: 100vh;
    }
</style>
