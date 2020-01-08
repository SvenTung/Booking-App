<template lang="html">
  <div id="form">
    <form class="" v-on:submit="addBooking" method="post">
      <label for="name">Customer Name</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Customer Email</label>
      <input type="email" v-model="email" required />

      <label for="checkedId">Is the Customer checked in?</label>
      <input type="checkbox" id="checkedId" v-model="checkedIn" />

      <input type="submit" value="save" id="save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingsService from "@/services/BookingService.js";

export default {
  name: "bookingForm",
  data() {
    return {
      name: "",
      email: "",
      checkedIn: false
    };
  },

  methods: {
    addBooking(e) {
      e.preventDefault();
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
      BookingsService.postBooking(booking).then(res =>
        eventBus.$emit("booking-added", res)
      );
      {this.name = "",
      this.email = "",
      this.checkedIn = false}
    }
  }
};
</script>

<style lang="css" scoped></style>
