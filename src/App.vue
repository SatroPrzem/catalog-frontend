<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader/AppHeader.vue'

import ScrollToTopBtn from './components/ScrollToTopBtn.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <ScrollToTopBtn />
</template>
