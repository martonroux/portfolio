<script setup>
import CallToActionButton from "@/components/Home/CallToActionButton.vue";
</script>

<template>
  <div class="home">
    <div class="chess-board" :class="{'chess-left': chessLeft}">
      <div class="slot" v-for="idx in 64" :style="{
        borderTop: (idx > 8) ? '1px solid var(--chess-grid-color)' : 'none',
        borderBottom: (idx < 57) ? '1px solid var(--chess-grid-color)' : 'none',
        borderLeft: (idx % 8 !== 1) ? '1px solid var(--chess-grid-color)' : 'none',
        borderRight: (idx % 8 !== 0) ? '1px solid var(--chess-grid-color)' : 'none'
      }">
        <p class="h3">{{ text[idx - 1] }}</p>
      </div>
    </div>
    <div class="call-to-action" :class="{'show-cta': chessLeft}" :style="{zIndex: (blurr === 0  && chessLeft) ? 99999 : 0}">
      <CallToActionButton text="CONTACT" />
      <CallToActionButton text="WORK" />
      <CallToActionButton text="STACK" />
    </div>
    <div class="blurr-background" :style="{
      backdropFilter: 'blur(' + blurr.toString() + 'px)'
      }">
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
      blurr: 0,
      text: [],
      chessLeft: false
    }
  },
  mounted() {
    const sentence = "MARTON  ROUX            WEB DEV-        ELOPER          DESIGNER";

    for (let i = 0; i < sentence.length; i++) {
      this.text[i] = sentence[i];
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
      this.chessLeft = scrollY > height * 1.5;
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
  height: calc(100vh - var(--grid-size));
  width: 1px;
  background-color: transparent;
}
.tabs {
  scroll-snap-align: start;
  min-height: calc(100vh - var(--grid-size));
  width: 100%;
  border: 1px solid red;
}
.chess-board {
  position: absolute;
  top: var(--grid-size);
  left: 0;
  transform: translate(calc(100vw / 2 - 50%), calc(50vh - 50% - var(--grid-size)));

  transition: all 0.8s ease-in-out;

  height: calc(var(--grid-size) * 8);
  width: calc(var(--grid-size) * 8);
  display: grid;
  grid-template-columns: repeat(8, var(--grid-size));

  text-align: center;
}
.chess-board > * {
  height: var(--grid-size);
  width: var(--grid-size);
}
.slot {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chess-left {
  transition: all 0.8s ease-in-out;

  transform: translate(var(--grid-size), calc(50vh - 50% - var(--grid-size)));
}

.h3 {
  margin: 0;
  font-weight: 500;
  color: rgba(255, 255, 255, 65%);
}

.call-to-action {
  position: absolute;
  top: 0;
  right: 0;

  opacity: 0;
  transition: opacity 0.3s ease-out;

  transform: translate(calc(((100vw - var(--grid-size) * 9) / 2 - 50%) * -1), calc(100vh / 2 - 50%));

  pointer-events: none;
}
.call-to-action > *:not(:last-of-type) {
  margin-bottom: var(--grid-size);
}
.call-to-action > * {
  pointer-events: auto;
}
.show-cta {
  opacity: 100%;
}

@media (max-height: 760px) {
  .chess-board > * {
    height: var(--chess-board-small-height);
    width: var(--chess-board-small-height);
  }
  .chess-board {
    height: calc(var(--chess-board-small-height) * 8);
    width: calc(var(--chess-board-small-height) * 8);
    grid-template-columns: repeat(8, var(--chess-board-small-height));
  }
}
@media (max-height: 600px) {
  .h3 {
    font-weight: 200;
    font-size: var(--h4-font-size);
  }
}
@media (max-width: 1100px) {
  .chess-left {
    transform: translate(calc(100vw - var(--grid-size) - 20vw), calc(50vh - 50% - var(--grid-size)));
  }
  .call-to-action {
    transform: translate(calc((100vw - var(--grid-size) - 100%) * -1), calc(100vh / 2 - 50%));
  }
}
@media (max-width: 700px) {
  .chess-board > * {
    height: var(--chess-board-small-width);
    width: var(--chess-board-small-width);
  }
  .chess-board {
    height: calc(var(--chess-board-small-width) * 8);
    width: calc(var(--chess-board-small-width) * 8);
    grid-template-columns: repeat(8, var(--chess-board-small-width));
  }
  .chess-left > * {
    height: var(--chess-board-small-height);
    width: var(--chess-board-small-height);
  }
  .chess-left {
    height: calc(var(--chess-board-small-height) * 8);
    width: calc(var(--chess-board-small-height) * 8);
    grid-template-columns: repeat(8, var(--chess-board-small-height));
  }
  .h3 {
    font-weight: 200;
    font-size: var(--h4-font-size);
  }
  .chess-left {
    opacity: 40%;
  }
}

</style>