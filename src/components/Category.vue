<template>
  <div class="categories">
    <ul>
      <li
        :class="{ active: currentCat === 'all' }"
        @click="setCurrentCat('all')"
      >
        Все
      </li>
      <li
        v-for="(item, index) in categories"
        :class="{ active: currentCat === index }"
        @click="setCurrentCat(index)"
        :key="{ index }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    currentCat: {
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const categories = [
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
    ];

    const setCurrentCat = (category) => {
      store.dispatch('setCategory', category);
    };

    return { categories, setCurrentCat };
  },
};
</script>

<style lang="scss">
.categories {
  ul {
    display: flex;

    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: darken(#f9f9f9, 2%);
      }

      &:active {
        background-color: darken(#f9f9f9, 5%);
      }

      &.active {
        background-color: $red;
        color: #fff;
      }
    }
  }
}
</style>
