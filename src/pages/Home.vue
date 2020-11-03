<template>
  <div className="container">
    <div className="content__top">
      <SortPopap />
      <Category />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items"></div>
  </div>
</template>

<script>
import Category from '../components/Category';
import SortPopap from '../components/SortPopap';
export default {
  name: 'Home',
  components: {
    Category,
    SortPopap,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
