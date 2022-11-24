<template>
  <div>
    <nav-bar></nav-bar>

    <div></div>

    <div class="d-flex justify-content-between p-5" style="gap: 50px">
      <b-button class="receipt-button">
        <img src="../assets/receipt.png" class="receipt-img" />
      </b-button>
      <b-button class="sunab-button">
        <img src="../assets/sunab.png" class="sunab-img" />
      </b-button>
    </div>
    <footer-notice></footer-notice>
  </div>
</template>

<script>
import FooterNotice from './FooterNotice.vue';
import NavBar from './NavBar.vue';
export default {
  components: { NavBar, FooterNotice },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.receipt-button {
  background: rgba(255, 102, 0, 0.767) !important;
  border-radius: 30px !important;
  .receipt-img {
    width: 100%;
    height: auto;
  }
}
.sunab-button {
  background: rgba(255, 102, 0, 0.767) !important;
  border-radius: 30px !important;
  .sunab-img {
    width: 100%;
    height: auto;
  }
}
</style>
