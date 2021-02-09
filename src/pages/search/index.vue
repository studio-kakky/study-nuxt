<template>
  <div class="container">
    <CommonHeader />
    <RestaurantList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { YelpBusinessGetApiInputModel } from '../../shared/api/yelp/business/get-input-model';

export default Vue.extend({
  async mounted() {
    const query = this.$route.query;
    const model = new YelpBusinessGetApiInputModel({
      location: query.location as string,
    });

    await this.$accessor.restaurants.fetch(model);
  },
});
</script>

<style>
.container {
  width: 100%;
}
</style>
