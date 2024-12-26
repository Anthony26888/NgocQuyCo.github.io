// Utilities
import { defineStore } from "pinia";
import axios from "axios";
export const useAppStore = defineStore("app", {
  state: () => {
    return {
      Url: "http://localhost:3000",
      UrlImgProduct: "/src/assets/Imgage/Product/",
      Product: [],
      ListPrinter: [],
      ListMaterial: [],
      ListAccessory: [],
      ListFilter: [],
      ListFilterProduct: [],
      ListCart: [],
      Search: "",
      NewProductBanner: [],
      dialog:false
    };
  },
  getters: {},

  actions: {

    async FetchProduct() {
      const res = await fetch(`${this.Url}/data/product`);
      const check = await res.json();
      this.ListFilter = check;
      this.ListPrinter = check.filter((value) => value.type == "Máy in");
      this.ListMaterial = check.filter((value) => value.type == "Nguyên liệu");
      this.ListAccessory = check.filter((value) => value.type == "Linh kiện");
    },

    async AddCart(id) {
      const res = await fetch(`${this.Url}/data/product/${id}`);
      const check = await res.json();
      const AddedList = {
        id: check.id,
        name: check.name,
        img: check.img,
        brand: check.brand,
        qty: 1,
      };

      this.ListCart.push(AddedList);
      this.SaveCart();
    },
    SaveCart() {
      localStorage.setItem("Cart", JSON.stringify(this.ListCart));
    },
    RemoveCart(index) {
      if (this.ListCart.length === 0) {
        this.ListCart = JSON.parse(localStorage.getItem("Cart"));
        this.ListCart.splice(index, 1);
        this.SaveCart();
      }
      if (this.ListCart) {
        this.ListCart.splice(index, 1);
        this.SaveCart();
      }
    },
    SendCart(email, fullname, phone, note){
      axios({
        method: 'post',
        url: `${this.Url}/listcart`,
        data: {
          email: email,
          fullname: fullname,
          phone: phone,
          note: note,
          cart:JSON.parse(localStorage.getItem("Cart"))
        },
      });
      this.dialog = true
    }
  },
});
