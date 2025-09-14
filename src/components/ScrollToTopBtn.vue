<template>
  <transition>
    <div v-if="show" class="scroll-to-the-top" @click="scrollTop">
      <div class="svg" v-html="arrowUp" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

import arrowUp from '@/assets/arrow-up.svg?raw'

const show = ref(false)

const { y } = useScroll(window, { behavior: 'smooth' })

const scrollTop = () => {
  y.value = 0
}

watch(y, (newY) => {
  show.value = newY > 100
})
</script>

<style scoped lang="scss">
.scroll-to-the-top {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  background-color: #000000bb;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: #000;
    transform: translateY(-0.2rem);
  }

  & > .svg {
    width: 90%;
    height: 90%;
    fill: #ffffff;
  }
}

.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.5s ease,
    scale 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  scale: 0;
}
</style>
