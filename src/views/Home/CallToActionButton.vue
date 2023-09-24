<script setup>

</script>

<template>
  <div class="call-to-action-button">
    <span class="square" />
    <p class="h4">{{ text }}</p>
    <div class="arrow">
      <span class="line-1" />
      <span class="line-2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

.call-to-action-button {
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: var(--white-color);
  height: var(--grid-size);
  width: calc(var(--grid-size) * 5);
  max-width: calc(100vw - 2rem);

  cursor: pointer;

  transition: transform 0.3s ease-in-out;
}
.square {
  display: inline-block;
  height: 12px;
  width: 12px;

  margin-left: calc((var(--grid-size) - 12px) / 2);

  background-color: var(--black-color);
}
.arrow {
  height: var(--grid-size);
  width: var(--grid-size);
}
.line-1,
.line-2 {
  display: inline-block;
  position: absolute;
  right: 1rem;

  width: calc(var(--grid-size) / 2);
  height: 3px;

  background-color: var(--black-color);

  transform: translateY(calc(var(--grid-size) / 2 - 50%));
}
.line-1 {
  transform-origin: bottom right;
  transform: translateY(calc(var(--grid-size) / 2 - 50%)) rotate(45deg);
}
.line-2 {
  transform-origin: top right;
  transform: translateY(calc(var(--grid-size) / 2 - 50%)) rotate(-45deg);
}
.h4 {
  color: var(--black-color);
  font-weight: 100;

  margin: 0 0 0 calc((var(--grid-size) - 12px) / 2);
}

.call-to-action-button:hover {
  transform: scale(103%);
}

@media (max-width: 700px) {
  .h4 {
    font-size: var(--h5-font-size);
  }
  .line-1,
  .line-2 {
    width: calc(var(--grid-size) / 2.7);
  }
}
@media (max-height: 500px) {
  .call-to-action-button {
    height: calc(var(--grid-size) * 0.7);
  }
  .h4 {
    font-size: var(--h5-font-size);
  }
  .line-1,
  .line-2 {
    width: calc(var(--grid-size) / 3);
  }
}

</style>