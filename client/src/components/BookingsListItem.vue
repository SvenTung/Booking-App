<template lang="html">
  <tr class="booking-item">
    <td>{{ booking.name }}</td>
    <td>{{ booking.email }}</td>
    <td v-on:click="updateBooking">{{ booking.checkedIn }}</td>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">
      Delete
    </button>
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
    },
    updateBooking() {
      this.booking.checkedIn = !this.booking.checkedIn
      BookingService.updateBooking(this.booking).then(() =>
        eventBus.$emit("booking-updated", this.booking)
      );
    }
  }
};
</script>

<style lang="css" scoped>
td {
  padding: 3px 20px 3px;
  font-family: arial, san-serif;
}

.delete-btn {
  background-color: #ED526f;
  border: none;
  color: white;
  padding: 5px;
  margin: 5px;
}
</style>
