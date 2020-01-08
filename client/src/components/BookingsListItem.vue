<template lang="html">
  <tr class="booking-item">
    <td>{{ booking.name }}</td>
    <td>{{ booking.email }}</td>
    <td>{{ booking.checkedIn }}</td>
    <button
      type="button"
      class="delete-btn"
      v-on:click="deleteBooking"
    ></button>
  </tr>
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
