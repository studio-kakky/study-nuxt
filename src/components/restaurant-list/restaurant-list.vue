<template>
  <div class="RestaurantList">
    <RestaurantItem
      v-for="v in list.toArray()"
      :key="v.id.toString()"
      :restaurant="v"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { YelpBusinessGetApiInputModel } from '../../shared/api/yelp/business/get-input-model';
import { Restaurants } from '../../shared/models/restaurant/restaurants';

import RestaurantItem from './list-item.vue';

@Component({
  components: {
    RestaurantItem,
  },
})
export default class RestaurantList extends Vue {
  mounted() {
    this.$accessor.restaurants.fetch(new YelpBusinessGetApiInputModel({}));
  }

  get list(): Restaurants {
    const restaurants = this.$accessor.restaurants.restaurants;
    return !!restaurants.toArray ? restaurants : Restaurants.blank();
  }
}
</script>

<style scoped lang="scss">
.RestaurantList {
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
