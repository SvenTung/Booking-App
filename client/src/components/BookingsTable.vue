<template lang="html">
  <div class="bookings-wrapper">
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Checked in</th>
      </tr>
      <bookings-list-item
        v-for="(booking, index) in bookings"
        :key="index"
        :booking="booking"
      />
    </table>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingsService from "@/services/BookingService.js";
import BookingsListItem from "./BookingsListItem.vue";
export default {
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    BookingsService.getBookings().then(bookings => (this.bookings = bookings));
    eventBus.$on("booking-added", booking => {
      this.bookings.push(booking);
    });
    eventBus.$on("booking-deleted", id => {
      let index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });
    eventBus.$on("booking-updated", id => {
      let index = this.bookings.findIndex(booking => booking._id === id);
<<<<<<< HEAD
      this.bookings[index].checkedIn = !this.bookings[index].checkedIn;
=======
      this.bookings[index].checkedIn = !this.bookings[index].checkedIn
>>>>>>> da86c2f475ebd218046205452f301fc68c3f59e9
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
