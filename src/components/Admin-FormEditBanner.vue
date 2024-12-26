<template lang="">
  <v-card width="100%">
    <v-btn
      class="text-caption m-2"
      variant="text"
      prepend-icon="mdi mdi-arrow-left"
      to="/Admin/Danh-sach-banner"
      >Quay lai</v-btn
    >
    <form>
      <v-card-title class="text-h4 font-weight-light"
        >Chỉnh sửa Banner
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-select
            clearable
            v-model="LocationOfBanner"
            label="Vị trí Banner"
            :items="['Quảng cáo', 'Sản phẩm mới', 'Dịch vụ']"
            variant="solo-filled"
          ></v-select>
          <v-text-field
            clearable
            label="Tên Banner"
            variant="solo-filled"
            v-model="NameOfBanner"
          ></v-text-field>
          <v-text-field
            clearable
            label="Tiêu đề Banner"
            variant="solo-filled"
            v-model="TitleOfBanner"
          ></v-text-field>
          <v-textarea
            label="Miêu tả Banner"
            variant="solo-filled"
            v-model="DescriptionOfBanner"
          ></v-textarea>
          <v-row>
            <v-col cols="4">
              <v-file-input
                v-model="imageFileSingle"
                label="Hình ảnh mô tả"
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="previewImage"
                hidden
              >
                <template v-slot:selection="{ fileNames }">
                  <template v-for="fileName in fileNames" :key="fileName">
                    <v-chip
                      class="me-2"
                      color="primary"
                      size="small"
                      label
                      close
                      @click:close="deleteChip(index, fileNames)"
                    >
                      {{ fileName }}
                    </v-chip>
                  </template>
                </template>
              </v-file-input>
              <p class="text-red text-caption">
                Chú ý: Hình ảnh đầu tiên sẽ là ảnh bìa sản phẩm
              </p>
            </v-col>

            <v-col cols="8" >
              <v-hover v-slot="{ isHovering, props }" open-delay="100">
                <v-card
                  variant="text"
                  :border="isHovering ? 'success md' : false"
                  width="100"
                  height="100"
                >
                  <v-img
                    :lazy-src="imagePreview"
                    :src="imagePreview"
                    aspect-ratio="1"
                    class="mb-2 text-right pa-2"
                    width="100"
                    height="100"
                    cover
                    v-bind="props"
                    v-show="imageFileSingle !== null"
                  >
                  </v-img>
                  <v-img
                    :lazy-src="`/src/assets/Image/Banner/${imageFetchPreview}`"
                    :src="`/src/assets/Image/Banner/${imageFetchPreview}`"
                    aspect-ratio="1"
                    class="mb-2 text-right pa-2"
                    width="100"
                    height="100"
                    cover
                    v-bind="props"
                    v-show="imageFileSingle == null"
                  >
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-btn
            class="text-caption bg-primary"
            block
            type="submit"
            @click="EditForm()"
            >Lưu</v-btn
          >
        </v-container>
      </v-card-actions>
    </form>
    <v-dialog v-model="dialogSuccess" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Dữ liệu đã cập nhật thành công"
        title="Cập nhật thành công"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Xác nhận"
            @click="dialogSuccess = false"
            to="/Admin/Danh-sach-Banner"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import axios from "axios";
import { useAppStore } from "@/store/app";
const store = useAppStore();
export default {
  data() {
    return {
      FormEditBanner: [],
      IdOfBanner: "",
      NameOfBanner: "",
      TitleOfBanner: "",
      DescriptionOfBanner: "",
      LocationOfBanner: "",
      imageFileSingle: null,
      imagePreview: null,
      imageFetchPreview:null,
      Input: null,
      dialogSuccess: false,
      ShowImageInput: false,
      ShowImage: true,
    };
  },
  created() {
    this.FetchEditBanner();
    this.$watch(() => this.$route.params, this.FetchEditBanner);
  },
  methods: {
    previewImage() {
      if (this.imageFileSingle) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(this.imageFileSingle);
      }
    },
    RemoveImage() {
      this.imagePreview = null;
    },
    EditForm() {
      // if (this.imageFileSingle !== null) {
      //   return this.Input = {
      //     id: this.IdOfBanner,
      //     name: this.NameOfBanner,
      //     title: this.TitleOfBanner,
      //     description: this.DescriptionOfBanner,
      //     location: this.LocationOfBanner,
      //     img: this.imageFileSingle[0].name
      //   };
      // }
      if (this.imageFileSingle == null) {
        return this.Input = {
          id: this.IdOfBanner,
          name: this.NameOfBanner,
          title: this.TitleOfBanner,
          description: this.DescriptionOfBanner,
          location: this.LocationOfBanner,
          img: this.imagePreview
        };
      }

      // if (this.imageFileSingle !== null) {
      //   const imageSingle = new FormData();
      //   imageSingle.append("images", this.imageFileSingle);
      //     axios
      //       .post(`${store.Url}/upload-single`, imageSingle)
      //       .then(function (response) {
      //         console.log(response);
      //       })
      //       .catch(function (error) {
      //         console.log(error);
      //       });
      // }

      axios
        .patch(
          `${store.Url}/data/patch/banner/${this.$route.params.id}`,
          this.Input
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async FetchEditBanner() {
      if (this.$route.params.id) {
        try {
          const res = await fetch(
            `${store.Url}/data/banner/${this.$route.params.id}`
          );
          const FormEditBanner = await res.json();
          (this.IdOfBanner = FormEditBanner.id),
            (this.NameOfBanner = FormEditBanner.name);
          (this.TitleOfBanner = FormEditBanner.title),
            (this.DescriptionOfBanner = FormEditBanner.description),
            (this.LocationOfBanner = FormEditBanner.location);
            this.imageFetchPreview = FormEditBanner.img
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    },
  },
};
</script>
<style lang=""></style>
