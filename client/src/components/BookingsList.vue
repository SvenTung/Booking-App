<template lang="html">
  <div class="bookings-wrapper">
    <bookings-list-item
      v-for="(booking, index) in bookings"
      :key="index"
      :booking="booking"
    />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingsService from "@/services/BookingService.js";
import BookingsListItem from "./BookingsListItem.js";
export default {
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    BookingsService.getBookings().then(
      bookings => (this.bookings = BookingsListItem)
    );
    eventBus.$on("booking-added", booking => {
      this.bookings.push(booking);
    });
    eventBus.$on("booking-deleted", id => {
      let index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });
  },
  components: {
    "bookings-list-item": BookingsListItem
  }
};
</script>

<style lang="css" scoped>
.bookings-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
