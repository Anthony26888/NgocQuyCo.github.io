<template>
  <vContainer>
    <v-app-bar density="comfortable" class="bg-amber-lighten-2 p-2" transition="fade-transition">
      <router-link to="/">
        <v-img class="align-center" src="../../assets/Image/logoNG.png" width="100" height="100"></v-img>
      </router-link>

      <VSpacer />

      <div class="d-none d-sm-flex d-flex mx-auto align-center">
        <router-link to="/" style="text-decoration: none; color: inherit">
          <v-btn stacked class="title-app"> TRANG CHỦ </v-btn>
        </router-link>

        <v-btn to="/Gioi-thieu" stacked class="title-app"> GIỚI THIỆU </v-btn>

        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn to="/San-pham" stacked v-bind="props" class="title-app"> SẢN PHẨM </v-btn>
          </template>

          <v-list density="compact">
            <v-list-item>
              <v-menu location="start" open-on-hover>
                <template v-slot:activator="{ props }">
                  <router-link to="/Danh-sach-may-in-date" style="text-decoration: none; color: inherit">
                    <v-btn variant="text" v-bind="props" class="w-100">
                      MÁY IN DATE
                    </v-btn>
                  </router-link>
                </template>

                <v-list class="me-4">
                  <v-list-item v-for="(item, index) in store.CIJ" :key="index">
                    <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                      <v-btn variant="text" class="w-100" @click="store.GetDetail(item.id)">
                        {{ item.name }}
                      </v-btn>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
            <v-list-item>
              <v-menu location="start" open-on-hover>
                <template v-slot:activator="{ props }">
                  <router-link to="/Danh-sach-may-in-thung" style="text-decoration: none; color: inherit">
                    <v-btn variant="text" v-bind="props" class="w-100">
                      MÁY IN THÙNG
                    </v-btn>
                  </router-link>
                </template>

                <v-list class="me-4">
                  <v-list-item v-for="(item, index) in store.TIJ" :key="index">
                    <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                      <v-btn variant="text" class="w-100" @click="store.GetDetail(item.id)">
                        {{ item.name }}
                      </v-btn>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>

            <v-list-item>
              <v-menu location="start" open-on-hover>
                <template v-slot:activator="{ props }">
                  <router-link to="/Danh-sach-may-khac-lazer" style="text-decoration: none; color: inherit">
                    <v-btn variant="text" v-bind="props" class="w-100">
                      MÁY KHẮC LAZER
                    </v-btn>
                  </router-link>
                </template>

                <v-list class="me-4">
                  <v-list-item v-for="(item, index) in store.Lazer" :key="index">
                    <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                      <v-btn variant="text" class="w-100" @click="store.GetDetail(item.id)">
                        {{ item.name }}
                      </v-btn>
                    </router-link>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>

            <v-list-item>
              <v-btn to="/Danh-sach-linh-kien" variant="text" class="w-100">
                LINH KIỆN
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn to="/Danh-sach-nguyen-lieu" variant="text" class="w-100">
                NGUYÊN LIỆU
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn to="/Thue-may" variant="text" class="w-100">
                THUÊ MÁY
              </v-btn>
            </v-list-item>

          </v-list>
        </v-menu>

        <v-btn to="/Lien-he" stacked class="title-app"> LIÊN HỆ</v-btn>
      </div>

      <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer class="mt-4" v-model="drawer" location="left" width="350" temporary>
      <v-list density="compact">
        <router-link to="/" style="text-decoration: none; color: inherit">
          <v-list-item class="ms-3 me-3"  value="TC" title="TRANG CHỦ"></v-list-item>
        </router-link>

        <router-link to="/Gioi-thieu" style="text-decoration: none; color: inherit">
          <v-list-item class="ms-3 me-3" value="GT" title="GIỚI THIỆU"></v-list-item>
        </router-link>        

        <v-list-item>
          <v-list-group value="Product">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="SẢN PHẨM"></v-list-item>              
            </template>

            <v-list-group value="CIJ">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="MÁY IN DATE"></v-list-item>
              </template>

              <v-list-item v-for="value in store.CIJ" :key="value">
                <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                  <v-btn variant="text" @click="store.GetDetail(value.id)">{{ value.name }}</v-btn>
                </router-link>                
              </v-list-item>
            </v-list-group>

            <v-list-group value="TIJ">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="MÁY IN THÙNG"></v-list-item>
              </template>

              <v-list-item v-for="value in store.TIJ" :key="value">
                <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                  <v-btn variant="text" @click="store.GetDetail(value.id)">{{ value.name }}</v-btn>
                </router-link>                
              </v-list-item>
            </v-list-group>

            <v-list-group value="Lazer">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="MÁY KHẮC LAZER"></v-list-item>
              </template>

              <v-list-item v-for="value in store.Lazer" :key="value">
                <router-link to="/Thong-tin-san-pham" style="text-decoration: none; color: inherit">
                  <v-btn variant="text" @click="store.GetDetail(value.id)">{{ value.name }}</v-btn>
                </router-link>                
              </v-list-item>
            </v-list-group>

            <router-link to="/Danh-sach-linh-kien" style="text-decoration: none; color: inherit">
              <v-list-item value="LK" title="LINH KIỆN"></v-list-item>
            </router-link>

            <router-link to="/Danh-sach-nguyen-lieu" style="text-decoration: none; color: inherit">
              <v-list-item value="NL" title="NGUYÊN LIỆU"></v-list-item>
            </router-link>

            <router-link to="/Thue-may" style="text-decoration: none; color: inherit">
              <v-list-item value="TM" title="THUÊ MÁY"></v-list-item>
            </router-link>
          </v-list-group>
        </v-list-item>

        <router-link to="/Lien-he" style="text-decoration: none; color: inherit">
          <v-list-item class="ms-3 me-3" value="LH" title="LIÊN HỆ"></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </vContainer>
</template>
<style scoped>
.logoTitle {
  font-family: Inter;
  font-weight: 700;
}

.title-app {
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
}

@media only screen and (max-width: 500px) {
  .logoTitle {
    font-size: 16px;
  }
}

</style>
<script setup>
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>
<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
