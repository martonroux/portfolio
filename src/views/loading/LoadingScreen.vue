<template>
  <div class="loading-screen" :style="{transform: `scale(${scale})`}">
    <div class="morpion-grid">
      <span class="vertical-line vertical-line1" />
      <span class="vertical-line vertical-line2" />

      <span class="horizontal-line horizontal-line1" />
      <span class="horizontal-line horizontal-line2" />

      <div class="cross cross1">
        <span class="line-1" />
        <span class="line-2" />
      </div>
      <div class="cross cross2">
        <span class="line-1" />
        <span class="line-2" />
      </div>
      <div class="cross cross3">
        <span class="line-1" />
        <span class="line-2" />
      </div>
      <div class="cross cross4">
        <span class="line-1" />
        <span class="line-2" />
      </div>

      <div class="circle-container circle-container1">
        <div class="circle" />
      </div>
      <div class="circle-container circle-container2">
        <div class="circle" />
      </div>
      <div class="circle-container circle-container3">
        <div class="circle" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scale: 1
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();
  },
  methods: {
    resizeWindow() {
      const width: number = window.innerWidth;
      const height: number = window.innerHeight;

      const ratio: number = 0.8;

      if (width < height &&
            width < 480) {
        this.scale = (width * ratio) / 480;
      } else if (height < 600) {
        this.scale = (height * ratio) / 600;
      } else {
        this.scale = ratio;
      }
    }
  }
}
</script>

<style scoped>

.morpion-grid {
  display: block;

  width: calc(var(--grid-size) * 6);
  height: calc(var(--grid-size) * 6);

  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: calc(var(--grid-size) * 3);
}
.vertical-line {
  position: absolute;

  background-color: var(--white-color);

  height: calc(var(--grid-size) * 6);
  width: 1px;

  animation: verticalLineAppear 1.6s ease 1;
}
.vertical-line1 {
  transform: translate(calc(var(--grid-size) * -1), calc(var(--grid-size) * -2));
}
.vertical-line2 {
  transform-origin: top center;

  transform: translate(calc(var(--grid-size) * 1), calc(var(--grid-size) * 4)) rotate(180deg);
}

.horizontal-line {
  position: absolute;

  background-color: var(--white-color);

  width: calc(var(--grid-size) * 6);
  height: 1px;

  animation: horizontalLineAppear 1.6s ease 1;
}
.horizontal-line1 {
  transform: translateX(calc(var(--grid-size) * -3));
}
.horizontal-line2 {
  transform-origin: left center;

  transform: translate(calc(var(--grid-size) * 3), calc(var(--grid-size) * 2)) rotate(180deg);

}
.line-1,
.line-2 {
  position: absolute;

  width: var(--grid-size);
  height: 2px;

  background-color: var(--white-color);

  animation: crossAppear 1s ease 1;
}
.line-1 {
  transform: translate(-50%, var(--grid-size)) rotate(45deg);
}
.line-2 {
  transform: translate(-50%, var(--grid-size)) rotate(-45deg);
}
.cross {
  position: absolute;

  width: calc(var(--grid-size) * 2);
  height: calc(var(--grid-size) * 2);
}
.cross1 {
  transform: translate(calc(var(--grid-size) * 4), calc(var(--grid-size) * -2));
}
.cross2 {
  transform: translateY(calc(var(--grid-size) * -2));

  animation-delay: 0.3s;
}
.cross2 > .line-1, .cross2 > .line-2 {
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
}
.cross3 {
  transform: translateX(calc(var(--grid-size) * 2));

  animation-delay: 1s;
}
.cross3 > .line-1, .cross3 > .line-2 {
  animation-delay: 0.8s;
  animation-fill-mode: backwards;
}
.cross4 {
  transform: translate(calc(var(--grid-size) * 4), calc(var(--grid-size) * 2));
}
.cross4 > .line-1, .cross4 > .line-2 {
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

.circle {
  position: relative;

  height: var(--grid-size);
  width: var(--grid-size);
  border-radius: 50%;

  background-color: var(--white-color);

  animation: circleAppear 0.6s ease 1 backwards;
}
.circle-container {
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(var(--grid-size) * 2);
  width: calc(var(--grid-size) * 2);
}
.circle-container1 {
  transform: translateY(calc(var(--grid-size) * 2));
}
.circle-container2 {
  transform: translate(calc(var(--grid-size) * 2), calc(var(--grid-size) * 2));
}
.circle-container2 > .circle {
  animation-delay: 0.5s;
}
.circle-container3 {
  transform: translateX(calc(var(--grid-size) * 4));
}
.circle-container3 > .circle {
  animation-delay: 0.7s;
}

@keyframes verticalLineAppear {
  from {
    height: 0;
  }

  to {
    height: calc(var(--grid-size) * 6);
  }
}

@keyframes horizontalLineAppear {
  from {
    width: 0;
  }

  to {
    width: calc(var(--grid-size) * 6);
  }
}

@keyframes crossAppear {
  from {
    width: 0;
  }

  to {
    width: var(--grid-size);
  }
}

@keyframes circleAppear {
  from {
    height: 0;
    width: 0;
  }

  to {
    height: var(--grid-size);
    width: var(--grid-size);
  }
}

</style>