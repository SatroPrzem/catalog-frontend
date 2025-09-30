<template>
  <h2>404. Strona nie znaleziona</h2>
  <button @click="goToRoute()">Wróć do strony głównej</button>
</template>

<script setup lang="ts">
import { useRouterMethods } from '@/composables/useRouterMethods'

const { goToRoute } = useRouterMethods()
</script>
