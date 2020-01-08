<template lang="html">
  <label for="name">Customer Name</label>
  <input type="text" id="name" v-model="name" required />

  <label for="email">Customer Email</label>
  <input type="email" v-model="email" required />

  <label for="checkedId">Is the Customer checked in?</label>
  <input type="checkbox" value="true" v-model="checkedIn" />
</template>

<script>
export default {
  name: "bookingForm",
  data() {
    return {
      name: "",
      email: "",
      checkedIn: false
    };
  }
};
</script>

<style lang="css" scoped></style>
