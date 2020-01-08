<template lang="html">
  <div id="app">
    <div class="main">
      <div id="logo">
        <img src="@/assets/hotel_app_logo.png" />
      </div>
      <bookings-form />
      <bookings-table />
    </div>
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

<style lang="css" scoped>
.main {
  margin: 20px;
}

#logo {
  margin: 20px 0 20px 0px;
}
</style>
