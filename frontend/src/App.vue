<template>
  <div id="app">
    <main-view />
  </div>
</template>

<script>
import MainView from './components/MainView.vue';
export default {
  name: 'App',
  components: {
    MainView,
  },
};
</script>

<style>
#id {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  max-width: 1080px;
}
</style>
