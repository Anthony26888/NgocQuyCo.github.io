<template lang="">
  <div class="sheet d-flex flex-column justify-content-center algin-item-center text-center">
    <v-skeleton-loader type="list-item-three-line" :loading="loading">
      <span class="title-name text-teal-darken-1 ">{{ titleLarge }}</span>  
      <span class="title-collab text-deep-orange-lighten-2">{{ logan }}</span>
      <span class="text-muted title-logan mt-2">{{ colab }}</span>    
    </v-skeleton-loader>
  </div>
</template>
<script>
import 'animate.css';
export default {
  data() {
    return {
      loading:true,
      titleLarge: "NGỌC QUÝ TECHNOLOGY",
      year: "since 2015",
      logan: "Chuyên cung cấp các máy in công nghiệp",
      colab: "Linx - Hitachi - TIJ INKJET - KingCode"
    };
  },
  mounted() {
    setTimeout(() =>{
      this.loading=false
    },1500)
  },
};
</script>
<style scoped>
@media only screen and (min-width: 300px) {
  .sheet {
    margin-top: -100px
  }

  .title-name {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-logan {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-collab {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 700px) {
  .sheet {
    margin-top: -30px
  }

  .title-name {
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-logan {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-collab {
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 1024px) {
  .title-name {
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-collab {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-logan {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 1440px) {
  .title-name {
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-collab {
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-logan {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}

@media only screen and (min-width: 1920px) {
  .title-name {
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 62px;
    /* 93.939% */
  }

  .title-collab {
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }

  .title-logan {
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
}</style>
