<script setup>

import BaseWidget1 from "@/components/widgets/base_widgets/BaseWidget1.vue";
</script>

<template>
  <BaseWidget1 :title="'MyRPG'"
               :img-path="'./src/assets/images/myrpg.png'"
               :description="descriptionText"
               :tags="'#AI #Algo #C'"
               :url="'https://github.com/martonroux/myrpg'"/>
</template>

<script>
export default {
  data () {
    return {
      descriptionText: "This project was given to me by Epitech. We originally had to code an RPG-like game in C, but I added a little touch to it." +
          " As you can see on the picture, the Zombies follow the player with a certain logic. This logic is an AI-like function that modifies the " +
          "zombies speed and direction based on what the zombie sees in a certain radius in front of him. This way, zombies collide with a natural " +
          "feel."
    }
  }
}
</script>

<style scoped>

</style>