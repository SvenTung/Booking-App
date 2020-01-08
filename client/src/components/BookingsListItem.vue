<template lang="html">
  <div class="booking-item">
    <h3>Customer Name: {{ booking.name }}</h3>
    <p>Customer Email: {{ booking.email }}</p>
    <p>Checked In: {{ booking.checkedIn }}</p>
    <button
      type="button"
      class="delete-btn"
      v-on:click="deleteBooking"
    ></button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingService from "@/services/BookingService.js";
export default {
  name: "booking-list-item",
  props: ["booking"],
  methods: {
    deleteBooking() {
      BookingService.deleteBooking(this.booking._id).then(() =>
        eventBus.$emit("booking-deleted", this.booking._id)
      );
    }
  }
};
</script>

<style lang="css" scoped></style>
