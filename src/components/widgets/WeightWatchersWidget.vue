<script setup>
import BaseWidget2 from "@/components/widgets/base_widgets/BaseWidget2.vue";
</script>

<template>
  <BaseWidget2 :title="'Weight Tracker'"
               :description="descriptionText"
               :img-path="'./src/assets/images/weight_watchers.png'"
               :tags="'#FullStack #VueJS #FastAPI'"
               :url="'git@github.com:martonroux/weight_watcher.git'"/>
</template>

<script>
export default {
  data () {
    return {
      descriptionText: "This is not an Epitech project, but a personnal project of mine. Starting on the 1st June of this year," +
          " I wanted to do a website that helps you track your progress at the gym. Because you're not going to bring your computer " +
          "to the gym, making a computer version of the website isn't a priority, but that doesn't mean that the website doesn't adapt " +
          "to the size of your phone screen. At the moment, there isn't much to do on it, so I didn't deploy it yet, but I still made the " +
          "source code public on github."
    }
  }
}
</script>

<style scoped>

</style>