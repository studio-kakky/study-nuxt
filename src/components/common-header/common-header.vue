<template>
  <header class="PageHeader">
    <h1 class="PageHeader_h">StudyNuxt</h1>
    <nav class="GlobalNav">
      <ul class="GlobalNav_Items">
        <li class="GlobalNav_Item">
          <nuxt-link class="GlobalNav_Item_Link" to="/">Top</nuxt-link>
        </li>
        <li class="GlobalNav_Item"><a class="GlobalNav_Item_Link">About</a></li>
        <li class="GlobalNav_Item"><a class="GlobalNav_Item_Link">Blogs</a></li>
      </ul>
    </nav>
    <div class=""></div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class CommonHeader extends Vue {}
</script>

<style lang="scss">
.PageHeader {
  width: 100%;
  &_h {
    text-align: center;
    width: 100%;
    font-size: 20px;
    margin: 20px 0;
  }
}

.GlobalNav {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  &_Items {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
}
</style>
