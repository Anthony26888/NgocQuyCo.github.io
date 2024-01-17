// Utilities
import { defineStore } from 'pinia'
import products from "@/api/product.json"
import accessory from "@/api/accessory.json"
import { useLocalStorage } from "@vueuse/core"
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      products,    
      accessory,   
      Info:useLocalStorage("Info", []),  
      filter:"Linx"
    }
  }, 
  getters:{   
    Filter(){    
      return this.accessory.filter(value => value.model== this.filter)
    }
  },
  actions:{ 
    GetFilter(title){
      this.filter = title
    },
    GetMachine(id){
      this.Info = this.products.find(value => value.id === id)      
    },
    GetAccessory(id){
      this.Info = this.accessory.find(value => value.id === id)
    }
  }
})
