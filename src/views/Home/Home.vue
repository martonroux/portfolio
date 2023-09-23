<script setup>
import CallToActionButton from "@/views/Home/CallToActionButton.vue";
import ConvinceTab from "@/views/Home/ConvinceTab.vue";
</script>

<template>
  <div class="home" @scroll="scrolled" ref="homeContent">
    <div class="scroll-forcer" ref="scrollForcer"></div>
    <div class="tabs" ref="tabs">
      <ConvinceTab title="BACKGROUND" :description="backgroundDescription" />
      <ConvinceTab title="SKILLS" :description="skillsDescription" />
      <ConvinceTab title="WHY ME?" :description="whyMeDescription" />
    </div>
    <div class="scroll-forcer">
      <div class="call-to-action" :class="{'show-cta': chessLeft}">
        <CallToActionButton text="CONTACT" @click="onClick('/contact')" />
        <CallToActionButton text="WORK" @click="onClick('/work')" />
        <CallToActionButton text="STACK" @click="onClick('/stack')" />
      </div>
    </div>
  </div>
  <div class="fixed-content">
    <div class="blurr-background" :style="{
      backgroundColor: `rgba(0, 0, 0, ${blurr}%)`,
      backdropFilter: `blur(${blurr}px)`
    }">
    </div>
    <div class="chess-board" :class="{'chess-left': chessLeft}" :style="{
      height: chessBoardSize,
      width: chessBoardSize
    }">
      <div class="slot" v-for="idx in 64" :style="{
        borderTop: (idx > 8) ? '1px solid var(--chess-grid-color)' : 'none',
        borderBottom: (idx < 57) ? '1px solid var(--chess-grid-color)' : 'none',
        borderLeft: (idx % 8 !== 1) ? '1px solid var(--chess-grid-color)' : 'none',
        borderRight: (idx % 8 !== 0) ? '1px solid var(--chess-grid-color)' : 'none',
        height: gridMaxSize,
        width: gridMaxSize
      }">
        <p class="h3">{{ text[idx - 1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      blurr: 0,
      text: [],
      chessLeft: false,
      scrolling: false,
      gridMaxSize: 'var(--grid-size)',
      chessBoardSize: 'calc(var(--grid-size) * 8)',
      backgroundDescription: "I started programming about 4 years ago. At that time, I was on track to become a physicist, but I was greatly disappointed by my scientific studies and had an incorrect vision of what a physicist does on a daily basis. This led to a radical change in my career path, which turned out to be the best decision I've ever made. Programming has become both my hobby and my job.",
      skillsDescription: "I am skilled in multiple fields related to computer science. Over the past few years, I've explored data science, app and server development, and, of course, web development. I specialize in AI and web development because these are the two areas I am most passionate about: AI for its mathematical aspects and web development for its creative side.",
      whyMeDescription: "I am a really hard-working person. I excel in my studies, but I often have a bunch of time free on my hands. My first Freelance projects, that I conducted for friends, as well as testimonials from classmates, made me realise that I could totally combine my studies to a Freelance life. I’m used to working on weekends and late at night, which allows me to be just as efficient as a full time Freelancer. Moreover, I’ll only accept one project at a time, which will allow me to produce even higher quality work."
    }
  },
  mounted() {
    const sentence = "MARTON  ROUX            WEB DEV-        ELOPER          DESIGNER";

    for (let i = 0; i < sentence.length; i++) {
      this.text[i] = sentence[i];
    }

    window.addEventListener('scroll', () => {
      this.scrolled();
      this.setGridSize();
    });
    window.addEventListener('resize', () => {
      this.scrolled();
      this.setGridSize();
    });
    this.scrolled();
    this.setGridSize();
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolled);
  },
  methods: {
    scrolled() {
      const scrollForcer = this.$refs.scrollForcer;
      const tabs = this.$refs.tabs;
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        this.blurr = 0;
        return;
      }
      if (!scrollForcer || !tabs) return;
      const height = scrollForcer.offsetHeight;
      const tabsHeight = tabs.offsetHeight;

      if (scrollY < height) {
        this.blurr = scrollY / 100;
      } else {
        this.blurr = (height + tabsHeight - scrollY - 50) / 100;
        if (this.blurr < 0) this.blurr = 0;
      }
      if (this.blurr > 8) {
        this.blurr = 8;
      }
      this.chessLeft = scrollY > (height + tabsHeight * 0.6);
    },
    setGridSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (this.chessLeft === true && width < height) {
        this.gridMaxSize = 'var(--grid-size)';
        this.chessBoardSize = 'calc(var(--grid-size) * 8)'
        return;
      }
      if (width < height) {
        this.gridMaxSize = 'var(--chess-board-small-width)';
        this.chessBoardSize = 'calc(var(--chess-board-small-width) * 8)'
      } else {
        this.gridMaxSize = 'var(--chess-board-small-height)';
        this.chessBoardSize = 'calc(var(--chess-board-small-height) * 8)'
      }
    },
    onClick(menu) {
      router.push(menu)
    }
  }
}
</script>

<style scoped>

.home {
  position: relative;

  height: 100%;
  width: 100vw;
}

h1 {
  margin-top: 0;
}

.blurr-background {
  position: absolute;
  z-index: 5;
  padding-top: var(--grid-size);

  height: 100vh;
  width: 100vw;
}
.fixed-content {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
}
.scroll-forcer {
  height: calc(100vh);
  width: 1px;
  background-color: transparent;
}
.tabs {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  gap: var(--grid-size);
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - var(--grid-size));
  width: 100vw;
}
.chess-board {
  position: absolute;
  z-index: 0;

  top: var(--grid-size);
  left: 0;
  transform: translate(calc(100vw / 2 - 50%), calc(50vh - 50% - var(--grid-size) / 2));

  transition: all 0.8s ease-in-out;

  max-height: calc(var(--grid-size) * 8);
  max-width: calc(var(--grid-size) * 8);

  display: grid;
  grid-template-columns: repeat(8, auto);

  text-align: center;
}
.chess-board > * {
  max-height: var(--grid-size);
  max-width: var(--grid-size);

  transition: all 0.8s ease-in-out;
}
.slot {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chess-left {
  transition: all 0.8s ease-in-out;

  transform: translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - 50%));
}
.h3 {
  margin: 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 65%);
}

.call-to-action {
  position: absolute;
  bottom: 0;
  right: 0;

  opacity: 0;
  transition: opacity 0.3s ease-out;

  transform: translate(calc(var(--grid-size) * -1 - 10vw), calc((100vh - var(--grid-size)) / 2 * -1 + 50%));

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

@media (max-width: 1150px) {
  .chess-left {
    transform: translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - 50%));
  }
  .call-to-action {
    transform: translate(calc(-100vw + 100% + var(--grid-size)), calc((100vh - var(--grid-size)) / 2 * -1 + 50%));
  }
}
@media (max-width: 700px) {
  .h3 {
    font-size: var(--h4-font-size);
    font-weight: 200;
  }
  .chess-left {
    opacity: 40%;
  }
  .call-to-action {
    transform: translate(calc(-100vw + 100% + var(--grid-size) / 2), calc((100vh - var(--grid-size)) / 2 * -1 + 50%));
  }
}
@media (max-width: 400px) {
  .h3 {
    font-size: var(--h5-font-size);
    font-weight: 200;
  }
}
@media (max-height: 600px) {
  .call-to-action > *:not(:last-of-type) {
    margin-bottom: calc(var(--grid-size) / 2);
  }
  .h3 {
    font-size: var(--h4-font-size);
    font-weight: 200;
  }
}
@media (max-height: 400px) {
  .h3 {
    font-size: var(--h5-font-size);
    font-weight: 200;
  }
}

</style>