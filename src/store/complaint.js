// Utilities
import { defineStore } from "pinia";
import Complaint from "@/api/Infomation-client.json";
export const useAppStore = defineStore("complaint", {  
  state: () => {
    return {
      Complaint,
    };
  },
  getters: {},
  actions: {
    AddComplaint(item) {
      this.Complaint.push(item);
    },
  },
});
