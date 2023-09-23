<script setup>

</script>

<template>
  <div class="menu-small" ref="menu">
    <div class="cross">
      <span class="line-1" />
      <span class="line-2" />
    </div>
    <span class="inter-line" />
    <div class="text-container">
      <button class="hover-background" @click="onClick('/contact')">
        <span class="h5">CONTACT</span>
      </button>
    </div>
    <span class="inter-line" />
    <div class="text-container">
      <button class="hover-background" @click="onClick('/work')">
        <span class="h5">WORK</span>
      </button>
    </div>
    <span class="inter-line" />
    <div class="text-container">
      <button class="hover-background" @click="onClick('/')">
        <span class="h5">MENU</span>
      </button>
    </div>
    <span class="inter-line" />
    <div class="text-container">
      <button class="hover-background" @click="onClick('/stack')">
        <span class="h5">STACK</span>
      </button>
    </div>
    <span class="inter-line" />
    <div class="circle-container">
      <div class="circle" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['clicked'],
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  methods: {
    onClick(page) {
      this.$emit('clicked', page);
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

.menu-small {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transform: translateY(calc(50vh - 50% - var(--grid-size)));
}
p {
  margin: 0;
}
.text-container {
  padding: 0.5rem;

  width: calc(var(--grid-size) * 2);
  height: calc(var(--grid-size) * 2);
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
.inter-line {
  height: calc(var(--grid-size) * 2);
  width: 1px;
  background-color: var(--white-color);
}
.line-1,
.line-2 {
  position: absolute;

  width: var(--grid-size);
  height: 2px;

  background-color: var(--white-color);
}
.line-1 {
  transform: translate(calc(var(--grid-size) / 2), var(--grid-size)) rotate(45deg);
}
.line-2 {
  transform: translate(calc(var(--grid-size) / 2), var(--grid-size)) rotate(-45deg);
}
.cross {
  height: calc(var(--grid-size) * 2);
  width: calc(var(--grid-size) * 2);
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
  width: calc(var(--grid-size) * 2);
  height: calc(var(--grid-size) * 2);
}

@media (max-width: 870px) {
  .inter-line:first-of-type {
    display: none;
  }
  .inter-line:last-of-type {
    display: none;
  }
  .cross {
    display: none;
  }
  .circle-container {
    display: none;
  }
  .menu-small {
    transform: translateY(calc(50vh - 50% - var(--grid-size)));
  }
}

</style>