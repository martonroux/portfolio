<script setup>

</script>

<template>
  <button class="github-button" @click="goToUrl">
    <img src="@/assets/images/github.png" alt="git_logo" style="margin-right: 0.5vw">
    Project on Github
    <img src="@/assets/images/right-arrow.png" alt="arrow" style="margin-left: 0.5vw">
  </button>
</template>

<script>
export default {
  props: ['url'],
  methods: {
    goToUrl() {
      window.open(this.url, '_blank');
    }
  }
}
</script>

<style scoped>

.github-button {
  display: flex;
  flex-direction: row;
}

.github-button img {
  width: 1vw;
  height: 1vw;
}

button {
  padding: 1vw;
  border-color: transparent;
  background-color: white;
  display: inline-block;
  align-items: center;
  border-radius: 2vw;
  cursor: pointer;
  transition: scale 0.4s;
  font-family: "Work Sans", sans-serif;
  font-size: 1vw;
  color: black;
}

button:hover {
  scale: 96%;
}

button:active {
  scale: 90%;
}

</style>