<script setup lang="ts">
import CallToActionButton from "@/views/Home/CallToActionButton.vue";
import ConvinceTab from "@/views/Home/ConvinceTab.vue";
import ChangeLanguage from "@/views/Home/ChangeLanguage.vue";
</script>

<template>
  <div class="home" @scroll="scrolled" ref="homeContent">
    <div class="scroll-forcer" ref="scrollForcer"></div>
    <div class="tabs" ref="tabs">
      <ChangeLanguage @clicked="changeLanguage" />
      <div class="row-div">
        <ConvinceTab title="BACKGROUND" :description="backgroundDescription" />
        <ConvinceTab title="SKILLS" :description="skillsDescription" />
        <ConvinceTab title="WHY ME?" :description="whyMeDescription" />
      </div>
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
      width: chessBoardSize,
      transform: chessTransform
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

<script lang="ts">
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
      chessTransform: 'transform: translate(calc(100vw / 2 - 50%), calc(50vh - 50% - var(--grid-size) / 2))',
      backgroundDescriptionEN: "I started programming about 4 years ago. At that time, I was on track to become a physicist, but I was greatly disappointed by my scientific studies and had an incorrect vision of what a physicist does on a daily basis. This led to a radical change in my career path, which turned out to be the best decision I've ever made. Programming has become both my hobby and my job.",
      skillsDescriptionEN: "I am skilled in multiple fields related to computer science. Over the past few years, I've explored data science, app and server development, and, of course, web development. I specialize in AI and web development because these are the two areas I am most passionate about: AI for its mathematical aspects and web development for its creative side.",
      whyMeDescriptionEN: "I am a really hard-working person. I excel in my studies, but I often have a bunch of time free on my hands. My first Freelance projects, that I conducted for friends, as well as testimonials from classmates, made me realise that I could totally combine my studies to a Freelance life. I’m used to working on weekends and late at night, which allows me to be just as efficient as a full time Freelancer. Moreover, I’ll only accept one project at a time, which will allow me to produce even higher quality work.",
      backgroundDescriptionFR: "J'ai commencé la programmation il y a environ 4 ans. À cette époque, je me destinais à une carrière de physicien. Cependant, les études scientifiques et la vision erronée que j'avais du métier m'ont amené à me remettre en question. Ceci a entraîné un changement radical d'orientation professionnelle qui s'est avéré être le choix le plus important de toute ma vie. La programmation est devenue à la fois mon passe-temps, mon hobbie et mon travail.",
      skillsDescriptionFR: "J'ai des compétences dans de nombreux domaines très variés. En quelques années, j'ai pu explorer la science des données, le développement d'applications, de serveurs, et bien sûr, de sites web. Je me spécialise dans ce dernier domaine ainsi que dans celui de l'intelligence artificielle, car ce sont les sujets qui me passionnent le plus : l'intelligence artificielle pour son côté mathématique et le web pour son côté créatif.",
      whyMeDescriptionFR: "Je suis quelqu’un de très travailleur. J’excelle dans mes études, mais je me retrouve souvent avec du temps libre. Mes premiers projets en Freelance, pour le compte d’amis et de connaissances, ainsi que les témoignages de camarades d’études, m’ont fait me rendre compte que je pouvais très bien mener une vie de Freelance en parallèle de mes études. Je suis familier avec le travail en weekend et de nuit, ce qui me permet d’être tout aussi efficace qu’un Freelance à temps plein. De plus, je n’accepterai qu’un projet à la fois, ce qui me permettra de produire du travail d’une qualité encore plus importante.",
      backgroundDescription: '',
      skillsDescription: '',
      whyMeDescription: ''
    }
  },
  mounted() {
    const sentence = "MARTON  ROUX            WEB DEV-        ELOPER          DESIGNER";

    for (let i = 0; i < sentence.length; i++) {
      this.text[i] = sentence[i];
    }
    this.backgroundDescription = this.backgroundDescriptionEN;
    this.skillsDescription = this.skillsDescriptionEN;
    this.whyMeDescription = this.whyMeDescriptionEN;

    window.addEventListener('scroll', () => {
      this.scrolled();
      this.setGridSize();
      this.setChessTransforms();
    });
    window.addEventListener('resize', () => {
      this.scrolled();
      this.setGridSize();
      this.setChessTransforms();
    });
    this.scrolled();
    this.setGridSize();
    this.setChessTransforms();
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
    setChessTransforms() {
      // WHEN NORMAL: transform: translate(calc(100vw / 2 - 50%), calc(50vh - 50% - var(--grid-size) / 2));
      // WHEN LEFT: transform: translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - 50%));
      // WHEN LEFT, WIDTH < 1150px: transform: translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - 50%));

      const width: number = window.innerWidth;
      const boardSize: string = this.chessBoardSize.substring(5, this.chessBoardSize.length - 1);
      const boardOrientation: string = boardSize.includes('height') ? 'height' : 'width';
      const chessBoardSmallHeight: number = 0.0947 * window.innerHeight * 8;
      const chessBoardSmallWidth: number = 0.099 * width * 8;
      const chessBoardNormal: number = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size').substring(0, 2)) * 8;

      if (this.chessLeft === true) { // If chessLeft is true, chessBoard goes to the left of the screen
        if (width < 1150) { // If width too small, chessLeft goes to the right of the screen
          switch (boardOrientation) {
            case 'height': // If chessBoard size is defined by --chess-board-small-height
              if (chessBoardNormal < chessBoardSmallHeight) {
                this.chessTransform = `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
              } else {
                this.chessTransform = `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
              }
              break;
            case 'width': // If chessBoard size is defined by --chess-board-small-width
              if (chessBoardNormal < chessBoardSmallWidth) {
                this.chessTransform = `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
              } else {
                this.chessTransform = `translate(calc(100vw - 30vw), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
              }
              break;
          }
        } else { // Any other case, chessLeft goes to the left of the screen
          switch (boardOrientation) {
            case 'height': // If chessBoard size is defined by --chess-board-small-height
              if (chessBoardNormal < chessBoardSmallHeight) {
                this.chessTransform = `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
              } else {
                this.chessTransform = `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
              }
              break;
            case 'width': // If chessBoard size is defined by --chess-board-small-width
              if (chessBoardNormal < chessBoardSmallWidth) {
                this.chessTransform = `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - var(--grid-size) * 8 / 2))`;
              } else {
                this.chessTransform = `translate(var(--grid-size), calc((100vh - var(--grid-size)) / 2 - ${boardSize} / 2))`;
              }
              break;
          }
        }
      } else { // If chessLeft is false, chessBoard goes to the center of the screen
        switch (boardOrientation) {
          case 'height': // If chessBoard size is defined by --chess-board-small-height
            if (chessBoardNormal < chessBoardSmallHeight) {
              this.chessTransform = `translate(calc(100vw / 2 - var(--grid-size) * 8 / 2), calc(50vh - var(--grid-size) * 8 / 2 - var(--grid-size) / 2))`;
            } else {
              this.chessTransform = `translate(calc(100vw / 2 - ${boardSize} / 2), calc(50vh - ${boardSize} / 2 - var(--grid-size) / 2))`;
            }
            break;
          case 'width': // If chessBoard size is defined by --chess-board-small-width
            if (chessBoardNormal < chessBoardSmallWidth) {
              this.chessTransform = `translate(calc(100vw / 2 - var(--grid-size) * 8 / 2), calc(50vh - var(--grid-size) * 8 / 2 - var(--grid-size) / 2))`;
            } else {
              this.chessTransform = `translate(calc(100vw / 2 - ${boardSize} / 2), calc(50vh - ${boardSize} / 2 - var(--grid-size) / 2))`;
            }
            break;
        }
      }
    },
    changeLanguage(lang) {
      switch (lang) {
        case 'fr':
          this.changeToFrench();
          break;
        case 'en':
          this.changeToEnglish();
          break;
      }
    },
    changeToEnglish() {
      let idx = 0;
      let backDone = false;
      let skillsDone = false;
      let whyMeDone = false;

      const changeDescription = () => {
        if (backDone && skillsDone && whyMeDone) {
          return;
        }

        if (!backDone) {
          this.backgroundDescription = this.backgroundDescription.substring(0, idx) + this.backgroundDescriptionEN[idx] + this.backgroundDescription.substring(idx + 1);          if (idx === this.backgroundDescriptionEN.length - 1) backDone = true;
        }
        if (!skillsDone) {
          this.skillsDescription = this.skillsDescription.substring(0, idx) + this.skillsDescriptionEN[idx] + this.skillsDescription.substring(idx + 1);
          if (idx === this.skillsDescriptionEN.length - 1) skillsDone = true;
        }
        if (!whyMeDone) {
          this.whyMeDescription = this.whyMeDescription.substring(0, idx) + this.whyMeDescriptionEN[idx] + this.whyMeDescription.substring(idx + 1);
          if (idx === this.whyMeDescriptionEN.length - 1) whyMeDone = true;
        }

        idx++;

        setTimeout(changeDescription, 6);
      };

      this.backgroundDescription = '';
      this.skillsDescription = '';
      this.whyMeDescription = '';
      changeDescription();
    },
    changeToFrench() {
      let idx = 0;
      let backDone = false;
      let skillsDone = false;
      let whyMeDone = false;

      const changeDescription = () => {
        if (backDone && skillsDone && whyMeDone) {
          return;
        }

        if (!backDone) {
          this.backgroundDescription = this.backgroundDescription.substring(0, idx) + this.backgroundDescriptionFR[idx] + this.backgroundDescription.substring(idx + 1);          if (idx === this.backgroundDescriptionFR.length - 1) backDone = true;
        }
        if (!skillsDone) {
          this.skillsDescription = this.skillsDescription.substring(0, idx) + this.skillsDescriptionFR[idx] + this.skillsDescription.substring(idx + 1);
          if (idx === this.skillsDescriptionFR.length - 1) skillsDone = true;
        }
        if (!whyMeDone) {
          this.whyMeDescription = this.whyMeDescription.substring(0, idx) + this.whyMeDescriptionFR[idx] + this.whyMeDescription.substring(idx + 1);
          if (idx === this.whyMeDescriptionFR.length - 1) whyMeDone = true;
        }

        idx++;

        setTimeout(changeDescription, 6);
      };

      this.backgroundDescription = '';
      this.skillsDescription = '';
      this.whyMeDescription = '';
      changeDescription();
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
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - var(--grid-size));
  width: 100vw;
}
.row-div {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  gap: var(--grid-size);
  justify-content: center;
}
.chess-board {
  position: absolute;
  z-index: 0;

  top: var(--grid-size);
  left: 0;

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
}
.h3 {
  margin: 0;
  font-weight: 300;
  color: rgba(255, 255, 255, 75%);
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