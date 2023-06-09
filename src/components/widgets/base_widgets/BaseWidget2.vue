<script setup>

import GithubButton from "@/components/GithubButton.vue";
</script>

<template>
  <div class="widget">
    <div class="row-div">
      <img :src="imgPath" alt="project_image">
      <div class="text-container">
        <div style="display: flex; flex-direction: row; align-items: center;">
          <h2 style="margin-right: 1vw;">
            {{ title }}
          </h2>
          <div class="tags-text">
            {{ tags }}
          </div>
        </div>
        <p>
          {{ description }}
        </p>
        <GithubButton :url="url"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'imgPath', 'url', 'tags']
}
</script>

<style scoped>

.row-div {
  display: flex;
  flex-direction: row;
}

.widget {
  background-color: lightgray;
  color: black;
  padding: 2vw;
  margin-top: 3vw;
  border-radius: 10px;
}

.widget img {
  width: var(--widget-img-size);
  height: var(--widget-img-size);
  object-fit: cover;
  border-radius: 10px;
  margin-right: 2vw;
}

</style>