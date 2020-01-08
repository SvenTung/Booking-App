<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-table />
  </div>
</template>

<script>
import BookingsForm from "./components/BookingsForm.vue";
import BookingsTable from "./components/BookingsTable.vue";
export default {
  name: "app",
  components: {
    "bookings-form": BookingsForm,
    "bookings-table": BookingsTable
  }
};
</script>

<style lang="css" scoped></style>
