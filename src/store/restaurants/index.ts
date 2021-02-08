import { getterTree, mutationTree, actionTree } from 'typed-vuex';

import { Restaurants } from '../../shared/models/restaurant/restaurants';
import { YelpBusinessGetApiInputModel } from '../../shared/api/yelp/business/get-input-model';
import { yelpBusinessSearchApi } from '../../shared/api/yelp/business/api';
import { adapt } from './adapt';

export const state = () => ({
  restaurants: Restaurants.blank(),
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  restaurants: (state) => state.restaurants,
});

export const mutations = mutationTree(state, {
  setRestaurants(state, restaurants: Restaurants): void {
    state.restaurants = restaurants;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetch({ commit }, model: YelpBusinessGetApiInputModel) {
      const res = await yelpBusinessSearchApi.get(model);
      commit('setRestaurants', adapt(res.businesses));
    },
  }
);
