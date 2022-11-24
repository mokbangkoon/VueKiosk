<template>
  <div>
    <b-navbar type="dark" variant="white">
      <b-navbar-brand href="#">
        <img src="../assets/ublogo.png" class="logo-image" />
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-text class="nav-bar-text"> 정말 잘하는 정형외과 </b-nav-text>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <b-nav-text class="nav-bar-text-date">2022/11/16(수)</b-nav-text>
          <img src="../assets/home-icon.png" class="home-image" />
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo-image {
  width: 90px;
  height: auto;
  margin-left: 20px;
}
.home-image {
  width: 90px;
  height: auto;
  margin-right: 20px;
}
.nav-bar-text {
  color: black !important;
  font-weight: bold;
  font-size: 25px;
}
.nav-bar-text-date {
  color: gray !important;
  font-weight: bold;
  font-size: 20px;
}
.divider {
  background: orange;
  width: 100%;
  height: 3px;
}
</style>
