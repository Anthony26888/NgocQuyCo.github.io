<template lang="">
  <v-card width="100%">
    <v-btn
      class="text-caption m-2"
      variant="text"
      prepend-icon="mdi mdi-arrow-left"
      to="/Admin/Danh-sach-san-pham"
      >Quay lai</v-btn
    >
    <form>
      <v-card-title class="text-h4 font-weight-light"
        >Chỉnh sửa sản phẩm
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            clearable
            label="Tên sản phẩm"
            variant="solo-filled"
            v-model="NameOfProduct"
            disable
          ></v-text-field>
          <v-text-field
            clearable
            label="Thương hiệu sản phẩm"
            variant="solo-filled"
            v-model="BrandOfProduct"
            disable
          ></v-text-field>
          <v-select
            clearable
            v-model="TypeOfProduct"
            label="Chọn định dạng sản phẩm"
            :items="['Máy in', 'Linh kiện', 'Nguyên liệu']"
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
              <p class="text-red text-caption">
                Chú ý: Hình ảnh đầu tiên sẽ là ảnh bìa sản phẩm
              </p>
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
                      :lazy-src="`/src/assets/Image/Product/${image}`"
                      :src="`/src/assets/Image/Product/${image}`"
                      aspect-ratio="1"
                      class="mb-2 text-right pa-2"
                      width="100"
                      height="100"
                      cover
                      v-bind="props"
                      v-if="ShowImageInput == false"
                    >
                      <v-btn
                        variant="text"
                        icon="mdi mdi-close"
                        size="xs-small"
                        :color="isHovering ? 'success md' : false"
                        @click="RemoveImageMultiple(index)"
                      ></v-btn>
                    </v-img>
                    <v-img
                      :lazy-src="image"
                      :src="image"
                      aspect-ratio="1"
                      class="mb-2 text-right pa-2"
                      width="100"
                      height="100"
                      cover
                      v-bind="props"
                      v-else
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
          <v-textarea
            label="Đặc điểm sản phẩm"
            class="mt-5"
            v-model="Character"
          ></v-textarea>
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
          <v-btn
            class="text-caption bg-primary"
            block
            @click="EditForm(), (dialogSuccess = true)"
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
            to="/Admin/Danh-sach-san-pham"
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
      FormEditProduct: [],
      IdOfProduct: "",
      NameOfProduct: "",
      TypeOfProduct: "",
      ModelOfProduct: "",
      TechsOfProduct: "",
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
      Character: "",
      Input: null,
      dialogSuccess: false,
      dialogDelete: false,
      ShowImageInput: false,
    };
  },
  created() {
    this.FetchEditProduct();
    this.$watch(() => this.$route.params, this.FetchEditProduct);
  },
  methods: {
    previewImages() {
      this.ShowImageInput = true;
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
    RemoveImageMultiple(index) {
      this.imagePreviews.splice(index, 1);
      this.imageFileMultiple.splice(index, 1);
    },
    EditForm() {
      if (this.imageFileMultiple.length > 0) {
        this.Input = {
          id: this.IdOfProduct,
          name: this.NameOfProduct,
          brand: this.BrandOfProduct,
          type: this.TypeOfProduct,
          model: this.ModelOfProduct,
          tech: this.TechsOfProduct,
          imgDetail: this.imageFileMultiple.map((file) => file.name),
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
          review: [],
        };
      } else {
        this.Input = {
          id: this.IdOfProduct,
          name: this.NameOfProduct,
          brand: this.BrandOfProduct,
          type: this.TypeOfProduct,
          model: this.ModelOfProduct,
          tech: this.TechsOfProduct,
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
          review: [],
        };
      }

      if (this.imageFileMultiple != "") {
        const imageMultiple = new FormData();
        this.imageFileMultiple.forEach((file) => {
          imageMultiple.append("images", file);
        }),
          axios
            .post(`${store.Url}/upload-multiple`, imageMultiple)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      }

      axios
        .patch(
          `${store.Url}/data/patch/product/${this.$route.params.id}`,
          this.Input
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async FetchEditProduct() {
      if (this.$route.params.id) {
        try {
          const res = await fetch(
            `${store.Url}/data/product/${this.$route.params.id}`
          );
          const FormEditProduct = await res.json();
          (this.IdOfProduct = FormEditProduct.id),
            (this.NameOfProduct = FormEditProduct.name);
          (this.TypeOfProduct = FormEditProduct.type),
            (this.ModelOfProduct = FormEditProduct.model),
            (this.BrandOfProduct = FormEditProduct.brand);
          if (!this.imageFileMultiple) {
            this.imagePreviews = FormEditProduct.imgDetail;
          }
          (this.imagePreviews = FormEditProduct.imgDetail),
            (this.TechsOfProduct = FormEditProduct.tech),
            (this.TableItem1 = FormEditProduct.table[0].detail),
            (this.TableItem2 = FormEditProduct.table[1].detail),
            (this.TableItem3 = FormEditProduct.table[2].detail),
            (this.TableItem4 = FormEditProduct.table[10].detail),
            (this.TableItem5 = FormEditProduct.table[11].detail),
            (this.TableItem6 = FormEditProduct.table[12].detail),
            (this.TableItem7 = FormEditProduct.table[13].detail),
            (this.TableItem8 = FormEditProduct.table[3].detail),
            (this.TableItem9 = FormEditProduct.table[4].detail),
            (this.TableItem10 = FormEditProduct.table[5].detail),
            (this.TableItem11 = FormEditProduct.table[6].detail),
            (this.TableItem12 = FormEditProduct.table[7].detail),
            (this.TableItem13 = FormEditProduct.table[8].detail),
            (this.TableItem14 = FormEditProduct.table[9].detail),
            (this.Techs = FormEditProduct.tech),
            (this.Character = FormEditProduct.description);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    },
  },
};
</script>
<style lang=""></style>
