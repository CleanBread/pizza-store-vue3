<template>
  <div class="App">
    <div class="wrapper">
      <Header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style></style>
