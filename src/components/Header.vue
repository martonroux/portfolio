<script setup>

</script>

<template>
  <div class="header">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickActive: true
    }
  },
  emits: ["clicked"],
  methods: {
    onClick() {
      this.$emit('clicked');
      this.clickActive = !this.clickActive;
    }
  }
}
</script>

<style scoped>

.header {
  height: var(--grid-size);
  width: 100%;
}

.menu-button {
  position: absolute;
  top: calc((var(--grid-size) - (var(--grid-size) / 2)) / 2);
  left: calc(var(--grid-size) + ((var(--grid-size) - (var(--grid-size) / 2)) / 2));

  height: calc(var(--grid-size) / 2);
  width: calc(var(--grid-size) / 2);

  background-color: transparent;

  cursor: pointer;
  transition: transform 0.4s ease-in-out;
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

  transform-origin: center left;
}
.line-2 {
  /* Ligne à droite */

  transform: rotate(-90deg);
  transform-origin: bottom right;
}
.line-3 {
  /* Ligne en bas */

  top: calc(var(--grid-size) / 2);
  transform-origin: center right;
}
.line-4 {
  /* Ligne à gauche */

  top: calc(var(--grid-size) / 2);

  transform: rotate(-90deg);
  transform-origin: top left;
}

.click-active > .line-1 {
  transform: translateY(0) rotate(45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2)));
}
.click-active > .line-2 {
  transform: rotate(-45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2) * -1));
}
.click-active > .line-3 {
  transform: translateY(0) rotate(45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2) * -1));
}
.click-active > .line-4 {
  transform: rotate(-45deg) translateX(calc(((var(--grid-diagonal) / 2 - 100%) / 2) - 1px)) translateY(-1px);
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
  opacity: 40%;
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

</style>