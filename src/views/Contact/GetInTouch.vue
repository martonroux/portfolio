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
      <div class="click-to-copy">
        <img src="/Click-SVG.svg" alt="click to copy">
        <p>Click to copy</p>
      </div>
      <GetInTouchTab class="phone" alt="phone" text="06 26 28 90 88" logo="/phone.svg" type="copy" />
      <GetInTouchTab class="mail" alt="mail" text="marton.roux@outlook.com" logo="/mail.svg" type="copy" />
      <GetInTouchTab class="location" alt="location" text="Montpellier, FR" logo="/location-pin.svg" type="copy" />

      <p class="pro-networks-text">Pro networks:</p>
      <GetInTouchTab class="linkedin" alt="linkedin" text="marton-roux" logo="/linkedin.svg" type="link" link="https://www.linkedin.com/in/marton-roux/" />
      <GetInTouchTab class="github" alt="github" text="martonroux" logo="/github.svg" type="link" link="https://www.github.com/martonroux/" />
    </div>
  </div>
</template>

<style scoped>

.get-in-touch {
  width: calc(var(--grid-size) * 10);
  max-width: 100%;
}

.title-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;

  height: var(--grid-size);
  width: 100%;

  background-color: var(--white-color);
}

.description-wrapper {
  display: grid;
  grid-template-columns: [column1] 1fr [column2] 1fr [column3];
  gap: 1.5rem 3rem;

  justify-content: stretch;

  padding: 1rem;

  background-color: rgba(0, 0, 0, 65%);
}

.black-square {
  height: 12px;
  width: 12px;

  position: relative;
  transform: translateX(calc(var(--grid-size) / 2 - 50%));

  background-color: var(--black-color);
}

.h4 {
  color: var(--black-color);

  margin-left: calc((var(--grid-size) - 12px));
}

img {
  width: calc(var(--grid-size) * 0.4);
  height: calc(var(--grid-size) * 0.4);
}

.phone,
.mail,
.location {
  grid-column: column1;
}
.pro-networks-text {
  grid-column: column2;
  grid-row: 2;
}
.linkedin {
  grid-column: column2;
  grid-row: 3;
}
.github {
  grid-column: column2;
  grid-row: 4;
}
.click-to-copy {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  width: fit-content;

  grid-column: column1 / column3;
  grid-row: 1;

  margin: 0 auto;
}

@media (max-width: 819px) {
  .get-in-touch {
    width: calc(var(--grid-size) * 5);
  }
  .description-wrapper {
    grid-template-columns: [column1 column2] 1fr;
  }
  .linkedin {
    grid-column: column1;
    grid-row: auto;
  }
  .github {
    grid-column: column1;
    grid-row: auto;
  }
  .pro-networks-text {
    grid-row: auto;
  }
  .h4 {
    font-size: var(--h5-font-size);
  }
  .click-to-copy {
    grid-column: 1;
  }
}

</style>
