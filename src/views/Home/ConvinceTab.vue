<script setup>

</script>

<template>
  <div class="convince-tab">
    <div class="title-wrapper">
      <span class="square" />
      <h1 class="h4">{{ title }}</h1>
    </div>
    <div class="description-wrapper">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

.convince-tab {
  width: calc(var(--grid-size) * 5);
}
.title-wrapper {
  background-color: var(--white-color);

  height: var(--grid-size);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.description-wrapper {
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 65%);
  padding: calc(var(--grid-size) / 2);

}
.square {
  display: inline-block;
  height: 12px;
  width: 12px;

  margin-left: calc((var(--grid-size) - 12px) / 2);

  background-color: var(--black-color);
}
.h4 {
  color: var(--black-color);
  margin: 0 0 0 calc((var(--grid-size) - 12px) / 2);

  font-weight: 300;
}
p {
  margin: 0;
  line-height: 1.25;
}
@media (max-width: 470px) {
  .h4 {
    font-size: var(--h5-font-size);
  }
  .convince-tab {
    width: calc(100vw - var(--grid-size));
  }
}
@media (max-width: 470px) {
  .convince-tab {
    width: 100%;
  }
  .description-wrapper {
    padding: calc(var(--grid-size) / 4);
  }
}

</style>