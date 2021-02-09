<template>
  <div class="container">
    <CommonHeader />
    <div class="PageBody">
      <div class="SearchLinks">
        <header class="SearchLinks_Header">
          <h2 class="SearchLinks_Header_h">地域から探す</h2>
        </header>
        <ul class="LinkList">
          <li class="LinkListItem">
            <a href="/search?location=tokyo">東京</a>
          </li>
          <li class="LinkListItem">
            <a href="/search?location=yokohama">yokohama</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}

.PageBody {
  padding: 10px 20px;
}

.LinkList {
  list-style: none;
  padding: 0;
}
</style>
