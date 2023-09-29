<script setup>

</script>

<template>
  <form class="form">
    <input type="text" :placeholder="texts['first-name']">
    <input type="text" :placeholder="texts['last-name']">
    <input type="text" :placeholder="texts['email']">
    <input type="text" :placeholder="texts['phone']">
    <input type="text" :placeholder="texts['message']">
  </form>
</template>

<script>
export default {
  data() {
    return {
      texts: {}
    }
  },
  mounted() {
    if (document.documentElement.lang === 'en') {
      this.texts = {
        'first-name': 'First name',
        'last-name': 'Last name',
        'email': 'Email',
        'phone': 'Phone',
        'message': 'Your message...'
      }
    } else {
      this.texts = {
        'first-name': 'Prénom',
        'last-name': 'Nom',
        'email': 'Email',
        'phone': 'Téléphone',
        'message': 'Votre message...'
      }
    }
  }
}
</script>

<style scoped>

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>