<script setup>

</script>

<template>
  <div class="change-language">
    <div class="language-container">
      <button class="language" @click="onClick('fr')">
        <svg class="iconify iconify--twemoji flags" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg>
      </button>
      <p>/</p>
      <button class="language" @click="onClick('en')">
        <svg class="flags" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_503_2952)"><rect width="28" height="20" rx="2" fill="white"/><mask id="mask0_503_2952" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"/></mask><g mask="url(#mask0_503_2952)"><rect width="28" height="20" fill="#0A17A7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-1.28244 -1.91644L10.6667 6.14335V-1.33333H17.3334V6.14335L29.2825 -1.91644L30.7737 0.294324L21.3263 6.66667H28V13.3333H21.3263L30.7737 19.7057L29.2825 21.9165L17.3334 13.8567V21.3333H10.6667V13.8567L-1.28244 21.9165L-2.77362 19.7057L6.67377 13.3333H2.95639e-05V6.66667H6.67377L-2.77362 0.294324L-1.28244 -1.91644Z" fill="white"/><path d="M18.668 6.33219L31.3333 -2" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/><path d="M20.0128 13.6975L31.3666 21.3503" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/><path d="M8.00555 6.31046L-3.83746 -1.67099" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/><path d="M9.29006 13.6049L-3.83746 22.3105" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" fill="#E6273E"/></g></g><defs><clipPath id="clip0_503_2952"><rect width="28" height="20" rx="2" fill="white"/></clipPath></defs></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['clicked'],
  methods: {
    onClick(language) {
      document.documentElement.lang = language;
      this.$emit('clicked', language);
    }
  }
}
</script>

<style scoped>

button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;
}
.flags {
  height: 28px;
  width: 28px;
}
.language-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
}

@media (hover: hover) {
  button:hover {
    transform: scale(1.1);
  }
}

</style>