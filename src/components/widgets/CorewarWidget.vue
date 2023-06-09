<script setup>
import BaseWidget1 from "@/components/widgets/base_widgets/BaseWidget1.vue";
</script>

<template>
  <BaseWidget1 :title="titleText"
               :description="descriptionText"
               :img-path="imgPath"
               :tags="tagsText"
               :url="url"/>
</template>

<script>
export default {
  data () {
    return {
      titleText: "Corewar",
      descriptionText: "This is also an Epitech project, and it's actually the last one in the first year program, and probably " +
          "the most complex and interesting one too. We basically had to make an assembler for RedCode, which is the language used " +
          "in Corewar battles. Then, we used the assembly file in a \"Virtual Machine\" that reads the assembly, and acts accordingly, " +
          "by launching the Corewar Champion(s). We also made a bonus that adds a visual output directly in the terminal to see the " +
          "evolution of the battle.",
      imgPath: "/images/corewar.png",
      tagsText: "#Compiler #VM #C",
      url: "https://github.com/martonroux/corewar/tree/main"
    }
  }
}
</script>

<style scoped>

</style>