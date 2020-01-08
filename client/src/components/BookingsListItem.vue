<template lang="html">
  <tr class="booking-item">
    <td>{{ booking.name }}</td>
    <td>{{ booking.email }}</td>
    <td>{{ booking.checkedIn }}</td>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">
      Delete
    </button>
    <button class="delete-btn" v-on:click="updateBooking">
      update check in
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
      BookingService.updateBooking(this.booking).then(() =>
        eventBus.$emit("booking-updated", this.booking)
      );
    }
  }
};
</script>

<style lang="css" scoped>
td {
  padding: 3px 20px 10px;
  font-family: arial, san-serif;
}

.delete-btn {
  background-color: #00eaff;
  border: none;
  color: black;
  padding: 5px;
  margin: 5px;
}
</style>
