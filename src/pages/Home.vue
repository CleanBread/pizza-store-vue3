<template>
  <div className="container">
    <div className="content__top">
      <SortPopap />
      <Category />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items" v-if="pizzas">
      <PizzaCard v-for="pizza in pizzas" :key="pizza.id" v-bind="pizza" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
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
    const pizzas = ref([]);

    onMounted(() => {
      axios
        .get('http://localhost:8080/db.json')
        .then(({ data }) => {
          pizzas.value = data.pizzas;
        })
        .catch((err) => console.log(err));
    });
    return {
      pizzas,
    };
  },
};
</script>

<style lang="scss" scoped></style>
