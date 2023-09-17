<script setup>

</script>

<template>
  <div class="home">
    <div class="chess-board">
      GTESTEEEEDRBGNIRSDBMG SEIRJKGHQOIRDGLKBERQOILSDKGHFBNOQEIRKLSDGOIERNGFKQJERBGMJKZegsnkl
    </div>
    <div class="blurr-background" :style="{backdropFilter: 'blur(' + blurr.toString() + 'px)'}">
      <div class="content" ref="homeContent" @scroll="scrolled">
        <div class="scroll-forcer"></div>
        <div class="tabs">
          BACKGROUND
          SKILLS
          WHY ME?
        </div>
        <div class="scroll-forcer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blurr: 0
    }
  },
  methods: {
    scrolled() {
      const homeContent = this.$refs.homeContent;

      if (!homeContent) return;
      const height = homeContent.offsetHeight;
      const scrollY = homeContent.scrollTop;

      if (scrollY < height) {
        this.blurr = scrollY / 80;
      } else {
        this.blurr = (height * 2 - scrollY) / 80;
      }
    }
  }
}
</script>

<style scoped>

.home {
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

h1 {
  margin-top: 0;
}

.blurr-background {
  padding-top: var(--grid-size);

  height: 100vh;
  width: 100vw;
}
.content {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.scroll-forcer {
  scroll-snap-align: start;
  height: 100vh;
  width: 1px;
  background-color: transparent;
}
.tabs {
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  border: 1px solid red;
}
.chess-board {
  position: absolute;
  top: var(--grid-size);
  left: 0;

  height: calc(var(--grid-size) * 8);
  width: calc(var(--grid-size) * 8);
  display: grid;
  grid-template-columns: repeat(8, var(--grid-size));

  background-color: magenta;
}
/*.chess-board:nth-child(odd) {

} */

</style>