<template>
  <header class="PageHeader">
    <h1>StudyNuxt</h1>
    <nav class="GlobalNav">
      <ul class="GlobalNav_Items">
        <li class="GlobalNav_Item"><a class="GlobalNav_Item_Link">Home</a></li>
        <li class="GlobalNav_Item"><a class="GlobalNav_Item_Link">About</a></li>
        <li class="GlobalNav_Item"><a class="GlobalNav_Item_Link">Blogs</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export class TestComponent extends Vue {}
</script>
