<template>
  <div v-if="restaurant" class="RestaurantListItem">
    <header class="RestaurantListItem_Header">
      <input type="checkbox" class="RestaurantListItem_Header_Checkbox" />
      <h3 class="RestaurantListItem_Header_h">{{ restaurant.aliasName }}</h3>
    </header>
    <div class="RestaurantListItem_Body">
      <div class="RestaurantThumbnail">
        <img class="RestaurantThumbnail_img" :src="restaurant.thumbnailUrl" />
      </div>
      <table class="RestaurantInfoTable">
        <tbody>
          <tr class="RestaurantInfoTable_Row">
            <th class="RestaurantInfoTable_head">価格帯</th>
            <td class="RestaurantInfoTable_cell">
              {{ restaurant.budgetLevel.toPriceString() }}
            </td>
          </tr>
          <tr class="RestaurantInfoTable_Row">
            <th class="RestaurantInfoTable_head">住所</th>
            <td class="RestaurantInfoTable_cell">
              {{ `${restaurant.location.displayAddress.join(' ')} ` }}
            </td>
          </tr>
          <tr class="RestaurantInfoTable_Row">
            <th class="RestaurantInfoTable_head">電話番号</th>
            <td class="RestaurantInfoTable_cell">
              {{ restaurant.phoneNumber }}
            </td>
          </tr>
          <tr class="RestaurantInfoTable_Row">
            <th class="RestaurantInfoTable_head">評価</th>
            <td class="RestaurantInfoTable_cell">
              {{ restaurant.rating }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Restaurant } from '../../shared/models/restaurant/restaurant';

@Component
export default class RestaurantItem extends Vue {
  @Prop()
  restaurant!: Restaurant;
}
</script>

<style scoped lang="scss">
.RestaurantListItem {
  width: 100%;
  border: 1px solid #ccc;
  border-top: 3px solid #ccc;
  margin-bottom: 10px;
  &_Header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fcdce4;
    &_Checkbox {
      margin-right: 10px;
    }
  }

  &_Body {
    padding: 20px;
    box-sizing: border-box;
  }
}

.Restaurant {
  &Thumbnail {
    margin-bottom: 20px;
    text-align: center;
    &_img {
      max-height: 400px;
      max-width: 100%;
    }
  }

  &InfoTable {
    border-collapse: collapse;
    width: 100%;
    &_Row {
      border-bottom: 1px solid #ccc;
      &:first-child {
        border-top: 1px solid #ccc;
      }
    }
    &_head {
      background: #ddd;
    }
  }
}
</style>
