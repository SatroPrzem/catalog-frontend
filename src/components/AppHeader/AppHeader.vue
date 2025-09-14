<template>
  <header :class="{ hide }">
    <div class="nav-container">
      <div class="svg-wrapper" @click="goHome">
        <SvgHome :class="{ active }" />
      </div>
      <div class="svg-wrapper nav-icon" @click="toggleMenu">
        <SvgHamburger class="nav-hamburger" :class="{ active: mobileMenuOpen }" />
      </div>
      <nav :class="{ mobileMenuOpen }">
        <RouterLink class="link" to="/">Strona główna</RouterLink>
        <RouterLink class="link" to="/companies">Firmy</RouterLink>
        <RouterLink class="link" to="/register">Rejestracja</RouterLink>
        <RouterLink class="link" to="/login">Logowanie</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useGoHome } from '@/composables/useGoHome'

import SvgHamburger from './SvgHamburger.vue'
import SvgHome from './SvgHome.vue'

const route = useRoute()

const { goHome } = useGoHome()

const { y } = useScroll(window)

const hide = ref(false)

const mobileMenuOpen = ref(false)

const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)

const active = computed(() => route.path === '/')

watch(y, (newY, oldY) => {
  hide.value = newY > oldY && newY > 100 && !mobileMenuOpen.value
})
</script>

<style scoped lang="scss">
header {
  --header-height: 80px;
  --shadow-radius: 16px;
  --background-color: #ffffffcc;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--background-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 var(--shadow-radius) #0000004d;
  transition: top 0.3s ease;

  &.hide {
    top: calc(-1 * (var(--header-height) + var(--shadow-radius)));
  }

  & > .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;

    & > .svg-wrapper {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    & > .nav-icon {
      display: none;
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

  @media (max-width: 768px) {
    & > .nav-container {
      & > .nav-icon {
        display: flex;
      }

      & > nav {
        position: fixed;
        top: calc(var(--header-height) - 400vh);
        left: 0;
        display: flex;
        flex-direction: column;
        background-color: var(--background-color);
        box-shadow: 0 calc(var(--shadow-radius) / 2) var(--shadow-radius) #0000004d;
        width: 100%;
        padding: 1rem 0;
        // transition: top 0.3s ease

        &.mobileMenuOpen {
          top: var(--header-height);
        }

        .link {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
