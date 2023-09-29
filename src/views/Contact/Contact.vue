<script setup>
import GetInTouch from "@/views/Contact/GetInTouch.vue";
import Form from "@/views/Contact/Form.vue";
</script>

<template>
  <div class="contact">
    <GetInTouch />
    <Form />
  </div>
</template>

<style scoped>

.contact {
  margin-top: var(--grid-size);
  padding-left: var(--grid-size);
  padding-top: calc(var(--grid-size) + 100px);

  display: flex;
  flex-direction: row;

  width: 100%;
}

</style>