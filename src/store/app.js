// Utilities
import { defineStore } from 'pinia'
import products from "@/api/product.json"
import { useLocalStorage } from "@vueuse/core"
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      products, 
      Info:useLocalStorage("Info", []),  
      filter:null,
      filterInk:null
    }
  }, 
  getters:{   
    CIJ(){
      return this.products.filter(value => value.type == 'CIJ')
    },

    TIJ(){
      return this.products.filter(value => value.type == 'TIJ')
    },

    Lazer(){
      return this.products.filter(value => value.type == 'LAZER')
    },

    Accessory(){
      return this.products.filter(value => value.type == 'accessory')
    },

    Ink(){
      return this.products.filter(value => value.type == 'ink')
    },

    FilterAccessory(){   
      if(this.filter == null){
        return this.products.filter(value => value.type == 'accessory')
      }
      if(this.filter == "Tất cả"){
        return this.products.filter(value => value.type == 'accessory')
      }

      return this.products.filter(value => value.model== this.filter)
      
    },
    FilterInk(){   
      if(this.filterInk == null){
        return this.products.filter(value => value.type == 'ink')
      }
      if(this.filterInk == "Tất cả"){
        return this.products.filter(value => value.type == 'ink')
      }

      return this.products.filter(value => value.model== this.filterInk)
      
    }
  },
  actions:{ 
    GetFilter(title){
      this.filter = title
    },
    GetFilterInk(title){
      this.filterInk = title
    },
    GetDetail(id){
      this.Info = this.products.find(value => value.id === id)      
    }
  }
})
