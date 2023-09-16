<script setup>
import Menu from "@/components/Menu.vue";
import MyHeader from "@/components/Header.vue";
</script>

<template>
  <header>
    <MyHeader @clicked="onMenuButtonClick" :is-shown="showMenu" />
  </header>
  <Menu :is-shown="showMenu" @clicked="onMenuPageClick" />
  <h1>
    Titre
  </h1>
  <h2>
    Sous-titre
  </h2>
  <h3>
    Sous-sous-titre
  </h3>
  <h4>
    Sous-sous-sous-titre
  </h4>
  <h5>
    Sous-sous-sous-sous-titre
  </h5>
  <p>
    Paragraphe
  </p>
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
</style>
