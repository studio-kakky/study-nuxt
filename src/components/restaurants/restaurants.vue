<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { YelpBusinessGetApiInputModel } from '../../shared/api/yelp/business/get-input-model';

@Component
export default class Restaurants extends Vue {
  mounted() {
    this.$accessor.restaurants.fetch(new YelpBusinessGetApiInputModel({}));
  }
}
</script>
