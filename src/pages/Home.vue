<template>
  <div className="container">
    <div className="content__top">
      <SortPopap :currentSort="currentSort" />
      <Category :currentCat="currentCat" />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items" v-if="filterPizzas">
      <PizzaCard v-for="pizza in filterPizzas" :key="pizza.id" v-bind="pizza" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

import Category from '../components/Category';
import SortPopap from '../components/SortPopap';
import PizzaCard from '../components/PizzaCard';

export default {
  name: 'Home',
  components: {
    Category,
    SortPopap,
    PizzaCard,
  },
  setup() {
    const store = useStore();
    const pizzas = ref([]);

    const currentCat = computed(() => store.getters.getCategory);
    const currentSort = computed(() => store.getters.getSort);

    onMounted(() => {
      axios
        .get('http://localhost:8080/db.json')
        .then(({ data }) => {
          pizzas.value = data.pizzas;
        })
        .catch((err) => console.log(err));
    });

    const filterPizzas = computed(() => {
      return pizzas.value
        .filter((item) =>
          currentCat.value === 'all'
            ? item
            : item.category === currentCat.value,
        )
        .sort((prevItem, nextItem) => {
          switch (currentSort.value) {
            case 'popular':
              return prevItem.rating - nextItem.rating;
            case 'price':
              return prevItem.price - nextItem.price;
          }
        });
    });

    return {
      filterPizzas,
      pizzas,
      currentCat,
      currentSort,
    };
  },
};
</script>

<style lang="scss" scoped></style>
