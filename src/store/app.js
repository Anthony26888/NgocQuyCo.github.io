// Utilities
import { defineStore } from 'pinia'
import products from "@/api/product.json"
import accessory from "@/api/accessory.json"
import ink from "@/api/Ink.json"
import { useLocalStorage } from "@vueuse/core"
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      products,    
      accessory,   
      ink,
      Info:useLocalStorage("Info", []),  
      filter:null,
      filterInk:null
    }
  }, 
  getters:{   
    FilterAccessory(){   
      if(this.filter == null){
        return this.accessory
      }
      if(this.filter == "Tất cả"){
        return this.accessory
      }

      return this.accessory.filter(value => value.model== this.filter)
      
    },
    FilterInk(){   
      if(this.filterInk == null){
        return this.ink
      }
      if(this.filterInk == "Tất cả"){
        return this.ink
      }

      return this.ink.filter(value => value.model== this.filterInk)
      
    }
  },
  actions:{ 
    GetFilter(title){
      this.filter = title
    },
    GetFilterInk(title){
      this.filterInk = title
    },
    GetMachine(id){
      this.Info = this.products.find(value => value.id === id)      
    },
    GetAccessory(id){
      this.Info = this.accessory.find(value => value.id === id)
    },
    GetInk(id){
      this.Info = this.ink.find(value => value.id === id)
    }
  }
})
