<script setup>
import Menu from "@/views/Menu/Menu.vue";
import MyHeader from "@/views/Header.vue";
</script>

<template>
  <header>
    <MyHeader @clicked="onMenuButtonClick" :is-shown="showMenu" />
  </header>
  <Menu :is-shown="showMenu" @clicked="onMenuPageClick" />
  <router-view />
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    onMenuButtonClick(active) {
      this.showMenu = active;
    },
    onMenuPageClick(menu) {
      this.showMenu = false;

      if (menu === '') return;
      router.push(menu);
    }
  }
}
</script>

<style scoped>

header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: var(--grid-size);
  width: 100vw;
  background-color: transparent;
}

</style>
