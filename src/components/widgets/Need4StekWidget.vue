<script setup>
import BaseWidget2 from "@/components/widgets/base_widgets/BaseWidget2.vue";
</script>

<template>
  <BaseWidget2 :title="'Need4Stek'"
               :img-path="'./public/images/need4stek.png'"
               :description="descriptionText"
               :url="'https://github.com/martonroux/n4s'" :tags="'#AI #Algo #Python'"/>
</template>

<script>
export default {
  data () {
    return {
      descriptionText: "This is also an Epitech project. The point of this project is to create an algorithm that is capable of monitoring the actions" +
          " of a tiny car in a controlled environment, in order for it to avoid obstacles and follow the track correctly. This project started with " +
          "a championship where we all had to create the best algorithm in groups of 2, in 4 hours, and me and my teammate won!"
    }
  }
}
</script>

<style scoped>

</style>