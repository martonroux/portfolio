<script setup>
import BaseWidget1 from "@/components/widgets/base_widgets/BaseWidget1.vue";
</script>

<template>
  <BaseWidget1 :title="'Pneumonia X-Ray model'"
               :img-path="'./public/images/xray.jpeg'"
               :description="descriptionText"
               :url="'https://github.com/martonroux/xray_pneumonia'"
               :tags="'#CNN #Python #Keras'"/>
</template>

<script>
export default {
  data() {
    return {
      descriptionText: "This project was given to me during an AI 'pool', which is an intensive 1 week event where we learned more about AI" +
          " programming. Although I didn't have much time to do something incredible in the 1 week constraint, I worked on the project later" +
          " on to perfect it. I chose the Vega-19 CNN model, that had already been used in medical imaging in the past, and obtained" +
          " decent results, even though I don't really have the infrastructure to train a model of this size."
    }
  }
}
</script>

<style scoped>

</style>