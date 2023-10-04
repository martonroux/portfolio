<script setup>

</script>

<template>
  <button class="get-in-touch-tab" @click="onClick">
    <img :src="logo" :alt="alt">
    <span>{{ myText }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      myText: ''
    }
  },
  props: {
    logo: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    },
    link: {
      required: false,
      type: String
    }
  },
  mounted() {
    this.myText = this.text;
  },
  methods: {
    onClick() {

      if (this.type === 'link') {
        window.open(this.link);
      } else {
        this.clickedCopy()
      }
    },
    clickedCopy() {
      if (this.myText === 'Copié! ✅' || this.myText === 'Copied! ✅') return;
      const trueText = this.myText;

      this.clipboardAPI(this.myText);

      if (document.documentElement.lang === 'fr')
        this.myText = 'Copié! ✅';
      else
        this.myText = 'Copied! ✅';
      setTimeout(() => {
        this.myText = trueText;
      }, 1000);
    },
    clipboardAPI(copyText) {
      if (navigator.clipboard) {
        const clipboardItem = new ClipboardItem({
          'text/plain': new Blob([copyText], { type: 'text/plain' })
        });
        navigator.clipboard.write([clipboardItem]).catch(err => {
          console.error('Failed to copy using Clipboard API:', err);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = copyText;

        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          const successful = document.execCommand('copy');
          if (!successful) {
            alert('Failed to copy using execCommand.');
          }
        } catch (err) {
          alert('Failed to execute document.execCommand(\'copy\'):', err);
        }
        document.body.removeChild(textArea);
      }
    }
  }
}
</script>

<style scoped>

.get-in-touch-tab {
  background-color: var(--attribute-color);
  color: var(--white-color);

  border: none;

  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: 1rem;

  height: calc(var(--grid-size) * 0.7);
  width: 100%;

  padding: 0.4rem 0.8rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 2rem;

  justify-content: space-between;
  align-items: center;

  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  overflow: hidden; /* make sure it hides the content that overflows */
  white-space: nowrap; /* don't break the line */
}

.get-in-touch-tab span {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /* give the beautiful '...' effect */
}

img {
  height: calc(var(--grid-size) * 0.4);
  width: calc(var(--grid-size) * 0.4);
}

@media (hover: hover) {
  .get-in-touch-tab:hover {
    transform: scale(1.03);
  }
}

</style>