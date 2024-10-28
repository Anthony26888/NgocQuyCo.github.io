// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";
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
      Banner: [],
      BannerLanding1: [],
      BannerLanding2: [],
      BannerLanding3: [],
      BannerLanding4: [],
      BannerNewLanding: [],
    };
  },
  getters: {},

  actions: {
    async FetchBanner() {
      const res = await fetch(`${this.Url}/banner`);
      this.Banner = await res.json();
    },
    async FetchBannerLanding() {
      const res = await fetch(`${this.Url}/bannerLanding`);
      const check = await res.json();
      this.BannerLanding1 = check[0];
      this.BannerLanding2 = check[1];
      this.BannerLanding3 = check[2];
      this.BannerLanding4 = check[3];
    },
    async FetchProduct() {
      const res = await fetch(`${this.Url}/product`);
      const check = await res.json();
      this.ListFilter = check;
      this.ListPrinter = check.filter((value) => value.type == "printer");
      this.ListMaterial = check.filter((value) => value.type == "material");
      this.ListAccessory = check.filter((value) => value.type == "accessory");
    },
    async FetchNewLanding() {
      const res = await fetch(`${this.Url}/NewProductLanding`);
      this.BannerNewLanding = await res.json();
    },
    async AddCart(id) {
      const res = await fetch(`${this.Url}/product/${id}`);
      const check = await res.json();
      this.ListCart.push(check);
      this.SaveCart();
    },
    SaveCart() {
      localStorage.setItem("Cart", JSON.stringify(this.ListCart));
    },
    RemoveCart(id) {
      this.ListCart.splice(id, 1);
      this.SaveCart();
    },
  },
});
