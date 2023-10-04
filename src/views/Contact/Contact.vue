<script setup>
import GetInTouch from "@/views/Contact/GetInTouch.vue";
import Form from "@/views/Contact/Form.vue";
</script>

<template>
  <title>Contact me</title>
  <div class="contact">
    <GetInTouch />
    <Form />
  </div>
</template>

<style scoped>

.contact {
  margin-top: var(--grid-size);
  margin-bottom: var(--grid-size);
  padding-left: var(--grid-size);
  padding-right: var(--grid-size);
  padding-top: calc(var(--grid-size) + 100px);

  display: flex;
  flex-direction: column;
  gap: 3rem;

  align-items: center;

  width: 100%;
}

@media (max-width: 470px) {
  .contact {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: var(--grid-size);
  }
}

@media (min-width: 1320px) {
  .contact {
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 2rem;
  }
}

</style>