<script setup>
import Menu from "@/views/Menu/Menu.vue";
import MyHeader from "@/views/Header.vue";
import LoadingScreen from "@/views/loading/LoadingScreen.vue";
</script>

<template>
  <title>Marton Roux: Fullstack Web Developer & Front-end Specialist</title>
  <header>
    <MyHeader @clicked="onMenuButtonClick" :is-shown="showMenu" />
  </header>
  <Menu :is-shown="showMenu" @clicked="onMenuPageClick" />
  <div class="loading-screen-container">
    <LoadingScreen />
  </div>
  <div class="content">
    <router-view />
  </div>
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
  z-index: 12;
  top: 0;
  left: 0;
  height: var(--grid-size);
  width: 100vw;
}

.loading-screen-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  animation: loadingDisappear 1s ease 1 1.8s forwards;

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  animation: routerAppear 1s ease 1 2.2s backwards;
}

@keyframes loadingDisappear {
  from {
    opacity: 100%;
  }

  to {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes routerAppear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
