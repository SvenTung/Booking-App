<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-list />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue'
import BookingsList from './components/BookingsList.vue'

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList,
  },
}
</script>

<style lang="css" scoped>
</style>
