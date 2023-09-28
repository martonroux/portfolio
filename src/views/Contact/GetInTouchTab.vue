<script setup>

</script>

<template>
  <button class="get-in-touch-tab" @click="onClick">
    <img :src="logo" :alt="alt">
    {{ myText }}
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
        // this.showClicked = 'none';
        this.myText = trueText;
      }, 1000);
    },
    noClipboardAPI() {
      const textElement = document.querySelector('.get-in-touch-tab');

      const originalContentEditable = textElement.getAttribute('contentEditable');
      const originalReadOnly = textElement.getAttribute('readOnly');
      textElement.setAttribute('contentEditable', 'true');
      textElement.setAttribute('readOnly', 'false');

      const range = document.createRange();
      range.selectNodeContents(textElement);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand('copy');

      textElement.setAttribute('contentEditable', originalContentEditable || 'false');
      textElement.setAttribute('readOnly', originalReadOnly || 'true');

      window.getSelection().removeAllRanges();
      setTimeout(() => {
        textElement.blur();
      }, 100);
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
            console.error('Failed to copy using execCommand.');
          }
        } catch (err) {
          console.error('Failed to execute document.execCommand(\'copy\'):', err);
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
  min-width: calc(var(--grid-size) * 4);
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
}

img {
  height: calc(var(--grid-size) / 2);
  width: calc(var(--grid-size) / 2);
}

@media (hover: hover) {
  .get-in-touch-tab:hover {
    transform: scale(1.03);
  }
}

</style>