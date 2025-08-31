<template>
  <h2>404. Strona nie znaleziona</h2>
  <p>elo</p>
  <button @click="goHome()">Wróć do strony głównej</button>
</template>

<script setup lang="ts">
import { useGoHome } from '@/composables/useGoHome'

const { goHome } = useGoHome()
</script>
