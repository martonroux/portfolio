<script setup>
import MenuSmallHeight from "@/views/Menu/MenuSmallHeight.vue";
</script>

<template>
  <div class="menu" ref="menu" :style="{
        display: (display || isShown) ? 'block' : 'none',
        backgroundColor: isReallyShow ? 'rgba(20, 20, 20, 50%)' : 'transparent',
        backdropFilter: isReallyShow ? 'blur(12px)' : 'blur(0px)'
      }">
    <div class="morpion-grid" v-if="windowHeight > 600" :style="{display: isReallyShow ? 'grid' : 'none'}">
      <div class="cross">
        <span class="line-1" />
        <span class="line-2" />
      </div>
      <div class="text-container">
        <button class="hover-background" @click="onClick('/contact')">
          <span class="h5">CONTACT</span>
        </button>
      </div>
      <div class="cross">
        <span class="line-1" />
        <span class="line-2" />
      </div>
      <div class="text-container">
        <button class="hover-background" @click="onClick('work')">
          <span class="h5">WORK</span>
        </button>
      </div>
      <div class="text-container">
        <button class="hover-background" @click="onClick('/')">
          <span class="h5">MENU</span>
        </button>
      </div>
      <div class="circle-container">
        <div class="circle" />
      </div>
      <div class="circle-container">
        <div class="circle" />
      </div>
      <div class="text-container">
        <button class="hover-background" @click="onClick('stack')">
          <span class="h5">STACK</span>
        </button>
      </div>
      <span />
    </div>

    <MenuSmallHeight v-else @clicked="onClick" :style="{display: isReallyShow ? 'flex' : 'none'}" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      isReallyShow: false,
      windowHeight: 0
    }
  },
  props: {
    isShown: {
      required: true,
      type: Boolean
    }
  },
  emits: ['clicked'],
  mounted() {
    this.isReallyShow = this.isShown;

    window.addEventListener('resize', () => {this.onWindowResize()});
    document.addEventListener('click', this.handleClickOutside);
    this.onWindowResize();
  },
  unmounted() {
    window.removeEventListener('resize', () => {this.onWindowResize()});
    document.removeEventListener('click', (event) => this.handleClickOutside(event));
  },
  watch: {
    isShown(newValue, _) {
      if (newValue === false) {
        this.isReallyShow = false;
        setTimeout(() => {
          this.display = false;
        }, 300);
      } else {
        this.display = true;
        setTimeout(() => {
          this.isReallyShow = true;
        }, 5)
      }
    }
  },
  methods: {
    onClick(menu) {
      this.$emit('clicked', menu);
    },
    onWindowResize() {
      this.windowHeight = window.innerHeight;
    },
    handleClickOutside(event) {
      if (this.isShown === false) return;
      const el = this.$refs.menu;

      if (!(el && !el.contains(event.target))) {
        this.$emit('clicked', '')
      }
    }
  }
}
</script>

<style scoped>

.menu {
  position: fixed;
  z-index: 0;

  padding-top: var(--grid-size);
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  transition: background-color, backdrop-filter 0.2s ease-in-out;
}

.morpion-grid {
  display: grid; /* overriden by :style */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;

  width: 90%;
  max-width: calc(var(--grid-size) * 6);

  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 0 auto;

  transform: translateY(calc(50vh - 50% - var(--grid-size)));
}

.morpion-grid > * {
  height: calc(var(--grid-size) * 2);
}
.morpion-grid > *:nth-child(1) {
  border-bottom: 1px solid var(--white-color);
  border-right: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(2) {
  border-bottom: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(3) {
  border-bottom: 1px solid var(--white-color);
  border-left: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(4) {
  border-right: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(6) {
  border-left: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(7) {
  border-top: 1px solid var(--white-color);
  border-right: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(8) {
  border-top: 1px solid var(--white-color);
}
.morpion-grid > *:nth-child(9) {
  border-top: 1px solid var(--white-color);
  border-left: 1px solid var(--white-color);
}

.line-1,
.line-2 {
  position: absolute;

  width: var(--grid-size);
  height: 2px;

  background-color: var(--white-color);
}
.line-1 {
  transform: translate(calc(var(--grid-size) / 2 * -1), var(--grid-size)) rotate(45deg);
}
.line-2 {
  transform: translate(calc(var(--grid-size) / 2 * -1), var(--grid-size)) rotate(-45deg);
}
.circle {
  height: var(--grid-size);
  width: var(--grid-size);
  border-radius: 50%;

  background-color: var(--white-color);
}
.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
}
.text-container {
  padding: 0.5rem;
}
button {
  border: none;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: var(--white-color);
  font-family: var(--font-family);
}
.h5 {
  font-weight: 200;
}
.hover-background {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  cursor: pointer;
  transition: color, background-color 0.2s ease-in-out;
}
.hover-background:hover {
  background-color: var(--white-color);
  color: var(--black-color);
  font-weight: 600;
}
@media (max-width: 480px) {
  .line-1,
  .line-2 {
    width: var(--menu-grid-portion);
  }
  .line-1 {
    transform: translate(calc(var(--menu-grid-portion) / 2 * -1), var(--menu-grid-portion)) rotate(45deg);
  }
  .line-2 {
    transform: translate(calc(var(--menu-grid-portion) / 2 * -1), var(--menu-grid-portion)) rotate(-45deg);
  }
  .circle {
    width: var(--menu-grid-portion);
    height: var(--menu-grid-portion);
  }
  .morpion-grid > * {
    height: calc(var(--menu-grid-portion) * 2);
    width: calc(var(--menu-grid-portion) * 2);
  }
  .h5 {
    font-size: 1.2rem;
  }
}

</style>