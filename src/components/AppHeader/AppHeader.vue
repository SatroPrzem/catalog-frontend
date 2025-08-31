<template>
  <header>
    <div class="nav-container">
      <div class="logo-wrapper" @click="goHome">
        <SvgHome :class="{ active }" />
      </div>
      <nav>
        <RouterLink class="link" to="/">Strona główna</RouterLink>
        <RouterLink class="link" to="/companies">Firmy</RouterLink>
        <RouterLink class="link" to="/register">Rejestracja</RouterLink>
        <RouterLink class="link" to="/login">Logowanie</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgHome from '@/components/AppHeader/SvgHome.vue'
import { useGoHome } from '@/composables/useGoHome'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { goHome } = useGoHome()

const active = computed(() => route.path === '/')
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0.5rem;
  background: #ffffffcc;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 16px #0000004d;

  & > .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;

    & > .logo-wrapper {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    & > nav {
      display: flex;
      align-items: center;
      gap: 2rem;

      & > .link {
        color: #333;
        font-weight: 500;
        transition: color 0.3s;
        text-decoration: none;

        &:hover {
          color: #007bff;
        }

        &:active {
          color: #016cde;
        }

        &.router-link-active {
          color: #005fc5;
        }
      }
    }
  }
}
</style>
