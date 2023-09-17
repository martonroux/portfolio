<script setup>
import Menu from "@/components/Menu/Menu.vue";
import MyHeader from "@/components/Header.vue";
import Home from "@/components/Home/Home.vue";
</script>

<template>
  <header>
    <MyHeader @clicked="onMenuButtonClick" :is-shown="showMenu" />
  </header>
  <Menu :is-shown="showMenu" @clicked="onMenuPageClick" />
  <Home />
</template>

<script>
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
    }
  }
}
</script>

<style scoped>

header {
  position: absolute;
  top: 0;
  left: 0;
  height: var(--grid-size);
  width: 100vw;
  background-color: transparent;
}

</style>
