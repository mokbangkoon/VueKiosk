<template>
  <div>
    <key-board></key-board>
  </div>
</template>

<script>
import KeyBoard from './components/KeyBoard.vue';

export default {
  name: 'App',
  components: {
    KeyBoard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
