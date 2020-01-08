<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-list />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue'
import BookingsList from './components/BookingsList.vue'
import BookingService from './services/BookingService.vue'
import {eventBus} from './main.js'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList,
  },
  mounted() {
    this.fetchData(),
    eventBus.$on('booking-added', (booking) => {
			this.bookings.push(booking)
    }),
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
