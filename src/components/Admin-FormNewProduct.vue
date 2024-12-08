<template lang="">
  <v-card variant="text">
    <form>
      <v-card-title class="text-h4 font-weight-light"
        >Tạo sản phẩm mới
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            clearable
            label="Tên sản phẩm"
            variant="solo-filled"
            v-model="NameOfProduct"
          ></v-text-field>
          <v-select
            clearable
            v-model="TypeOfProduct"
            label="Chọn định dạng sản phẩm"
            :items="['printer', 'accessory', 'matertial']"
            variant="solo-filled"
          ></v-select>
          <v-select
            clearable
            v-model="ModelOfProduct"
            label="Chọn kiểu sản phẩm"
            :items="[
              'CIJ',
              'lazer',
              'TIJ',
              'Board',
              'Van',
              'Bàn phím',
              'Màn hình',
              'Lọc',
              'LK Đầu in',
              'Bơm',
              'Mực đen',
              'Mực vàng',
              'Mực trắng',
              'Dung môi',
              'Nước rửa',
              'Combo',
            ]"
            variant="solo-filled"
          ></v-select>
          <v-row>
            <v-col cols="4">
              <v-file-input
                v-model="imageFileSingle"
                label="Hình ảnh bìa"
                accept="image/*"
                prepend-icon="mdi-camera"
                @change="previewImage"
              ></v-file-input>
            </v-col>
            <v-col cols="8">
              <v-img
                :src="imagePreview"
                width="100"
                height="100"
                accept="image/*"
                alt="Image Preview"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-file-input
                v-model="imageFileMultiple"
                label="Hình ảnh mô tả"
                accept="image/*"
                prepend-icon="mdi-camera"
                multiple
                @change="previewImages"
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
            </v-col>
            <v-col cols="8">
              <div
                class="d-inline-flex mx-2"
                v-for="(image, index) in imagePreviews"
                :key="index"
              >
                <v-hover v-slot="{ isHovering, props }" open-delay="100">
                  <v-card
                    variant="text"
                    :border="isHovering ? 'success md' : false"
                  >
                    <v-img
                      :lazy-src="image"
                      :src="image"
                      aspect-ratio="1"
                      class="mb-2 text-right pa-2"
                      width="100"
                      height="100"
                      cover
                      v-bind="props"
                    >
                      <v-btn
                        variant="text"
                        icon="mdi mdi-close"
                        size="xs-small"
                        :color="isHovering ? 'success md' : false"
                        @click="RemoveImageMultiple(index)"
                      ></v-btn>
                    </v-img>
                  </v-card>
                </v-hover>
              </div>
            </v-col>
          </v-row>
          <v-textarea label="Đặc điểm sản phẩm" class="mt-5" v-model="Character"></v-textarea>
          <v-row v-for="(tech, index) in Techs" :key="index">
            <v-col cols="12">
              <v-textarea
                clearable
                :label="`Công nghệ sản phẩm ${index + 1}`"
                v-model="Techs[index]"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn
            prepend-icon="mdi mdi-plus"
            variant="tonal"
            class="text-caption mt-2"
            @click="AddTextarea()"
            >Thêm công nghệ sản phẩm</v-btn
          >
          <v-expansion-panels class="mt-5">
            <v-expansion-panel title="Thêm chi tiết sản phẩm">
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="TableItem1"
                      label="Thương hiệu"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem2"
                      label="Điện áp"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem3"
                      label="Công suất"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem4"
                      label="Nhiệt độ làm việc"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem5"
                      label="Kích thước sản phẩm"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem6"
                      label="Chất liệu sản phẩm"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem7"
                      label="Tiêu chuẩn chống bụi, ẩm"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="TableItem8"
                      label="Kích thước đầu phun"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem9"
                      label="Số dòng in"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem10"
                      label="Chiều cao kí tự"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem11"
                      label="Tốc độ in tối đa"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem12"
                      label="Số kí tự in tối đa"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem13"
                      label="Tính năng"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                    <v-text-field
                      v-model="TableItem14"
                      label="Chế độ làm việc"
                      variant="solo-filled"
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-btn class="text-caption bg-primary" block @click="uploadForm()"
            >Lưu</v-btn
          >
        </v-container>
      </v-card-actions>
    </form>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      NameOfProduct: "",
      TypeOfProduct: "",
      ModelOfProduct: "",
      imageFileSingle: null,
      imagePreview: null,
      imageFileMultiple: [],
      imagePreviews: [],
      TableItem1: "",
      TableItem2: "",
      TableItem3: "",
      TableItem4: "",
      TableItem5: "",
      TableItem6: "",
      TableItem7: "",
      TableItem8: "",
      TableItem9: "",
      TableItem10: "",
      TableItem11: "",
      TableItem12: "",
      TableItem13: "",
      TableItem14: "",
      Techs: [""],
      Character:"",
    };
  },
  methods: {
    AddTextarea() {
      this.Techs.push("");
    },
    previewImage() {
      if (this.imageFileSingle) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(this.imageFileSingle);
      } else {
        this.imagePreview = null;
      }
    },
    previewImages() {
      if (this.imageFileMultiple && this.imageFileMultiple.length > 0) {
        this.imageFileMultiple.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      }
    },
    RemoveImageMultiple(index){
      this.imagePreviews.splice(index, 1);
      this.imageFileMultiple.splice(index, 1)
    },
    uploadForm() {
      const Input = {
        name: this.NameOfProduct,
        type: this.TypeOfProduct,
        model: this.ModelOfProduct,
        tech: this.fields,
        img: this.imagePreview,
        imgDetail: this.imagePreviews,
        table: [
          { name: "Thương hiệu", detail: this.TableItem1 },
          { name: "Điện áp", detail: this.TableItem2 },
          { name: "Công suất", detail: this.TableItem3 },
          { name: "Nhiệt độ làm việc", detail: this.TableItem4 },
          { name: "Kích thước máy", detail: this.TableItem5 },
          { name: "Chất liệu máy", detail: this.TableItem6 },
          { name: "Tiêu chuẩn chống bụi, ẩm", detail: this.TableItem7 },
          { name: "Kích thước đầu phun", detail: this.TableItem8 },
          { name: "Số dòng in", detail: this.TableItem9 },
          { name: "Chiều cao ký tự", detail: this.TableItem10 },
          { name: "Tốc độ in tối đa", detail: this.TableItem11 },
          { name: "Số ký tự in tối đa", detail: this.TableItem12 },
          { name: "Tính năng", detail: this.TableItem13 },
          { name: "Chế độ làm việc", detail: this.TableItem14 },
        ],
        review:[]
      };
      // const imageSingle = new FormData();
      // imageSingle.append("image", this.imageFileSingle);
      // axios
      //   .post(`http://localhost:3000/upload-single`, imageSingle)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // const imageMultiple = new FormData();
      // this.imageFileMultiple.forEach((file) => {
      //   imageMultiple.append("images", file);
      // }),
      //   axios
      //     .post(`http://localhost:3000/upload-multiple`, imageMultiple)
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      axios
        .post(`http://localhost:3000/product/post`, JSON.stringify(Input))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang=""></style>
