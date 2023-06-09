<script setup>
import MyRPGWidget from "@/components/widgets/MyRPGWidget.vue";
import Need4StekWidget from "@/components/widgets/Need4StekWidget.vue";
import XRayWidget from "@/components/widgets/XRayWidget.vue";
import WeightWatchersWidget from "@/components/widgets/WeightWatchersWidget.vue";
import CorewarWidget from "@/components/widgets/CorewarWidget.vue";
</script>

<template>
  <header>
    <h1 style="margin-right: 1vw; margin-left: 1vw">
      Hi, I'm Marton Roux, an Epitech Student
    </h1>
    <h2>
      This is my portfolio.
    </h2>
  </header>

  <main>
    <CorewarWidget/>
    <Need4StekWidget/>
    <XRayWidget/>
    <WeightWatchersWidget/>
    <MyRPGWidget/>
  </main>
</template>

<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}

</style>