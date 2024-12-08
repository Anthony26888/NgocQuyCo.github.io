<template lang="">
  <v-card height="500">
    <v-form @submit.prevent="sendEmail">
      <div class="mb-3 row p-5">
        <div class="col-6">
          <v-text-field
            v-model="Lastname"
            :rules="nameRules"
            :counter="10"
            label="Họ và tên"
            required
            hide-details
            variant="solo"
          ></v-text-field>

          <v-text-field
            v-model="Email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
            variant="solo"
            class="mt-2"
          ></v-text-field>
        </div>
        <div class="col-6">
          <v-text-field
            v-model="Phone"
            :rules="nameRules"
            :counter="10"
            label="Số điện thoại"
            required
            hide-details
            variant="solo"
          ></v-text-field>
          <v-text-field
            v-model="Company"
            :rules="nameRules"
            :counter="10"
            label="Tên công ty"
            required
            hide-details
            variant="solo"
            class="mt-2"
          ></v-text-field>
        </div>
        <div class="col-12 mt-3">
          <v-textarea
            v-model="Text"
            label="Nội dung"
            variant="solo"
          ></v-textarea>
        </div>
        <div class="col-12 mt-3">
          <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
              <button
                type="submit"
                v-bind="props"
                class="w-100 bg-teal-accent-4 p-3"
              >
                Gửi thông tin
              </button>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-text class="mx-auto">
                  <v-icon
                    icon="mdi-check-bold"
                    size="100"
                    color="teal-darken-1"
                  ></v-icon>
                </v-card-text>
                <v-card-text>
                  <div class="text-h4 pa-12">ĐÃ GỬI THÀNH CÔNG</div>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </v-form>
  </v-card>

  <!--Notify-->
  <notify />
</template>
<script setup>
import emailjs from "emailjs-com";
</script>
<script>
export default {
  components: "Contact",
  data() {
    return {
      Lastname: "",
      Email: "",
      Phone: "",
      Company: "",
      Text: "",
      Notify: false,
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        // Define parameters for your email template
        name: this.Lastname,
        phone: this.Phone,
        email: this.Email,
        company: this.Company,
        message: this.Text,
        // Add more parameters as needed
      };

      emailjs
        .send(
          "service_ngocquy",
          "template_4u2o4kc",
          templateParams,
          "2Mf52aGgIt0YWC_mV"
        )
        .then((response) => {
          console.log("Email sent successfully", response);
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });

      this.Notify = true;
    },
  },
};
</script>
