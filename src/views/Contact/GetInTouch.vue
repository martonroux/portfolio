<script setup>
import GetInTouchTab from "@/views/Contact/GetInTouchTab.vue";
</script>

<template>
  <div class="get-in-touch">
    <div class="title-wrapper">
      <span class="black-square" />
      <h1 class="h4">GET IN TOUCH</h1>
    </div>
    <div class="description-wrapper">
      <GetInTouchTab alt="phone" text="06 26 28 90 88" logo="/phone.svg" type="copy" style="grid-column: column1" />
      <GetInTouchTab alt="mail" text="marton.roux@outlook.com" logo="/mail.svg" type="copy" style="grid-column: column1" />
      <GetInTouchTab alt="location" text="Montpellier, FR" logo="/location-pin.svg" type="copy" style="grid-column: column1" />

      <p style="grid-column: column2; grid-row: 1;">Pro networks:</p>
      <GetInTouchTab alt="linkedin" text="marton-roux" logo="/linkedin.svg" type="link" link="https://www.linkedin.com/in/marton-roux/" style="grid-column: column2; grid-row: 2;" />
      <GetInTouchTab alt="github" text="martonroux" logo="/github.svg" type="link" link="https://www.github.com/martonroux/" style="grid-column: column2; grid-row: 3;" />
    </div>
  </div>
</template>

<style scoped>

.get-in-touch {
  min-width: calc(var(--grid-size) * 5);
  width: fit-content;
}

.title-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;

  height: var(--grid-size);
  width: 100%;

  background-color: var(--white-color);
}

.description-wrapper {
  display: grid;
  grid-template-columns: [column1] 1fr [column2] 1fr;
  gap: 1.5rem 3rem;

  justify-content: stretch;

  padding: 1rem;

  background-color: rgba(0, 0, 0, 65%);
}

.black-square {
  height: 12px;
  width: 12px;

  position: relative;
  transform: translate(calc(var(--grid-size) / 2 - 50%), calc(var(--grid-size) / 2 - 50%));

  background-color: var(--black-color);
}

.h4 {
  color: var(--black-color);

  margin-left: calc((var(--grid-size) - 12px));
}

</style>
