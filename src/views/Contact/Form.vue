<script setup lang="ts">

</script>

<template>
  <form class="form" @submit="onSubmit" @submit.prevent>
    <div class="input-container">
      <input id="first-name" name="first-name" type="text" :placeholder="texts['first-name']" v-model="firstName" required>
      <img class="mandatory-star" src="/mandatory-star.svg" alt="mandatory">
    </div>
    <div class="input-container">
      <input id="last-name" name="last-name" type="text" :placeholder="texts['last-name']" v-model="lastName" required>
      <img class="mandatory-star" src="/mandatory-star.svg" alt="mandatory">
    </div>
    <div class="input-container">
      <input type="email" name="email" :placeholder="texts['email']" v-model="email" required>
      <img class="mandatory-star" src="/mandatory-star.svg" alt="mandatory">
    </div>
    <input type="text" name="phone" :placeholder="texts['phone']" v-model="phone">
    <div class="input-container">
      <textarea class="message" name="message" :placeholder="texts['message']" v-model="message" required/>
      <img class="mandatory-star" src="/mandatory-star.svg" alt="mandatory">
    </div>
    <button class="submit">
      <span class="submit-span">Submit</span>
      <svg class="tick-img" :class="{'animate-tick': animateTick}" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" id="icon-bound" fill="none" />
        <path d="M2,9.014L3.414,7.6L6.004,10.189L12.593,3.6L14.007,5.014L6.003,13.017L2,9.014Z" />
      </svg>
    </button>
  </form>
</template>

<script lang="ts">
import { sendEmail } from "@/requests/post/sendEmail";

export default {
  data() {
    return {
      texts: {},
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      animateTick: false
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
  },
  methods: {
    onSubmit() {
      this.animateTick = false;
      if (this.allInputsCorrect()) {
        sendEmail(this.email, this.phone, this.message, this.firstName, this.lastName).then((response) => {
          const data = response.data;

          if (data['status'] === 'success') {
            this.animateTick = true;
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    allInputsCorrect() {
      return this.firstName != '' && this.lastName != '' && this.email != '' && this.message != '';
    }
  }
}
</script>

<style scoped>

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem 1rem;

  max-width: calc(var(--grid-size) * 10);
  width: 100%;
}

input[type=text],
input[type=email],
textarea {
  background-color: var(--attribute-color);
  border: none;

  color: var(--white-color);

  height: fit-content;
  width: 100%;

  padding: 1rem;

  font-family: var(--font-family);
  font-size: 1rem;
}
input[type=text]:focus,
input[type=email]:focus,
textarea:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
.input-container:last-of-type {
  grid-column: 1 / 3;
}
.message {
  min-height: 10rem;
}

.mandatory-star {
  height: 1.5rem;
  width: 1.5rem;

  position: absolute;

  transform: translate(-2rem, 50%);
}

.submit {
  background-color: var(--white-color);
  border: none;

  height: calc(var(--grid-size) / 2);
  max-width: 300px;
  width: 100%;

  margin: 0 auto;

  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 500;

  transition: scale 0.3s ease;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  grid-column: 1 / 3;
}
.tick-img {
  height: 2rem;
  width: 2rem;

  justify-self: end;
}
.submit-span {
  position: relative;

  margin: 0 auto;

  transform: translateX(1rem); /* Half the size of the tick image */
}

.animate-tick {
  animation: tick 1s ease-in 1;
}

@media (hover: hover) {
  .submit:hover {
    scale: 1.03;
  }
}
@media (max-width: 650px) {
  .form {
    grid-template-columns: 1fr;
    grid-gap: 1rem 0;

    max-width: 550px;
    width: 100%;
  }
  .form > * {
    grid-column: 1;
  }
}

@keyframes tick {
  0% {
    fill: mediumseagreen;
  }

  30% {
    transform: scale(4) rotate(0deg);
  }

  43% {
    transform: scale(4) rotate(30deg);
  }

  66% {
    transform: scale(4) rotate(-30deg);
  }

  70% {
    fill: mediumseagreen;
  }
}

</style>