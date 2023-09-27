<script setup lang="ts">

</script>

<template>
  <div class="header" :style="{
    backgroundColor: headerBackground
  }">
    <div @click="onClick" class="menu-button" :class="{'click-active': clickActive, 'click-inactive': !clickActive}">
      <span class="line-1" />
      <span class="line-2" />
      <span class="line-3" />
      <span class="line-4" />
    </div>
    <div class="portfolio-text">
      <div class="portfolio-text-letter">P</div>
      <div class="portfolio-text-letter">O</div>
      <div class="portfolio-text-letter">R</div>
      <div class="portfolio-text-letter">T</div>
      <div class="portfolio-text-letter">F</div>
      <div class="portfolio-text-letter">O</div>
      <div class="portfolio-text-letter">L</div>
      <div class="portfolio-text-letter">I</div>
      <div class="portfolio-text-letter">O</div>
    </div>
    <div class="portfolio-text-phone">
      <h3>PORTFOLIO</h3>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      clickActive: false,
      headerBackground: 'transparent'
    }
  },
  emits: ["clicked"],
  props: {
    isShown: {
      required: true,
      type: Boolean
    }
  },
  mounted() {
    this.clickActive = this.isShown;

    window.addEventListener('scroll', this.scrolled);
    this.scrolled();
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrolled);
  },
  methods: {
    onClick() {
      this.clickActive = !this.clickActive;
      this.$emit('clicked', this.clickActive);
    },
    scrolled() {
      const scrollY: number = window.scrollY;

      if (scrollY > 10) {
        this.headerBackground = 'var(--black-color)';
      } else {
        this.headerBackground = 'transparent';
      }
    }
  },
  watch: {
    isShown(newValue, _) {
      if (newValue === false) {
        this.clickActive = false;
      }
    }
  }
}
</script>

<style scoped>

.header {
  height: var(--grid-size);
  width: 100%;

  position: fixed;
  z-index: 10;

  transition: background-color 0.3s ease-in-out;
}

.menu-button {
  position: absolute;
  top: calc((var(--grid-size) - (var(--grid-size) / 2)) / 2);
  left: calc(var(--grid-size) + ((var(--grid-size) - (var(--grid-size) / 2)) / 2));

  height: calc(var(--grid-size) / 2);
  width: calc(var(--grid-size) / 2);

  background-color: transparent;

  cursor: pointer;
}
.menu-button > span {
  height: 2px;
  width: calc(var(--grid-size) / 2);
  background-color: var(--white-color);

  position: absolute;
  transition: transform 0.3s ease-in-out;
}
.line-1 {
  /* Ligne du haut */

  transform-origin: center right;
  transform: translateY(1px);
}
.line-2 {
  /* Ligne à droite */

  transform: translateX(-2px) translateY(1px) rotate(-90deg);
  transform-origin: top right;
}
.line-3 {
  /* Ligne en bas */

  top: calc(var(--grid-size) / 2);

  transform: translateY(-1px);
  transform-origin: center left;
}
.line-4 {
  /* Ligne à gauche */

  top: calc(var(--grid-size) / 2);
  transform: translateX(1px) rotate(-90deg);

  transform-origin: center left;
}

.click-active > .line-1 {
  transform: translateY(calc(var(--grid-size) / 2)) rotate(45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2) * -1));
}
.click-active > .line-2 {
  transform: translateY(calc(var(--grid-size) / 2)) rotate(45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2) * -1));
}
.click-active > .line-3 {
  transform: rotate(-45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2)));
}
.click-active > .line-4 {
  transform: rotate(-45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2)));
}

.portfolio-text {
  position: absolute;
  display: flex;

  flex-direction: row;
  gap: 2.3rem;

  right: var(--grid-size);
  transform: translateY(calc((var(--grid-size) - 100%) / 2));
}
.portfolio-text > div {
  font-size: var(--h3-font-size);
  font-weight: 200;
  opacity: 40%;
}
.portfolio-text-phone {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
}
.portfolio-text-phone > h3 {
  margin: 0;

  font-weight: lighter;
  letter-spacing: 0.4rem;
  opacity: 40%;

  transform: translateY(calc((var(--grid-size) - 100%) / 2));
}

@media (hover: hover) {
  .click-inactive:hover > .line-2 {
    transform: rotate(0) translateY(400%);
  }
  .click-inactive:hover > .line-4 {
    transform: rotate(0) translateY(-400%);
  }
  .click-inactive:hover > .line-1 {
    transform: translateY(400%);
  }
  .click-inactive:hover > .line-3 {
    transform: translateY(-400%);
  }
}

@media (max-width: 1000px) {
  .portfolio-text {
    display: none;
  }
  .portfolio-text-phone {
    display: block;
  }
  .menu-button {
    left: calc(var(--grid-size) / 2);
  }
}

@media (max-width: 470px) {
  .portfolio-text-phone > h3 {
    font-size: var(--h4-font-size);
  }
}

@media (max-width: 350px) {
  .portfolio-text-phone > h3 {
    font-size: var(--h5-font-size);
  }
}
</style>