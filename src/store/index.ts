import { getAccessorType } from 'typed-vuex';
import * as restaurants from './restaurants';

export const state = () => {
  return {};
};

export const getters = {
  //
};

export const mutations = {
  //
};

export const actions = {
  //
};

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    restaurants,
  },
});
