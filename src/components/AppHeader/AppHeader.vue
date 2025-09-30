<template>
  <header :class="{ hide }">
    <div class="nav-container">
      <div class="svg-wrapper" @click="goToNavRoute()">
        <SvgHome :class="{ active }" />
      </div>
      <div class="svg-wrapper nav-icon" @click="toggleMenu">
        <SvgHamburger class="nav-hamburger" :class="{ active: mobileMenuOpen }" />
      </div>
      <nav :class="{ mobileMenuOpen }">
        <li @click="goToNavRoute()" class="link">Strona główna</li>
        <li @click="goToNavRoute(ERoutesNames.COMPANIES)" class="link">Firmy</li>
        <li @click="goToNavRoute(ERoutesNames.REGISTER)" class="link">Rejestracja</li>
        <li @click="goToNavRoute(ERoutesNames.LOGIN)" class="link">Logowanie</li>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useRouterMethods } from '@/composables/useRouterMethods'
import { ERoutesNames } from '@/router/router.types'

import SvgHamburger from './SvgHamburger.vue'
import SvgHome from './SvgHome.vue'

const route = useRoute()
const { goToRoute } = useRouterMethods()
const { y } = useScroll(window)

const hide = ref(false)
const isMobile = ref(false)
const mobileMenuOpen = ref(false)

const active = computed(() => route.path === '/')

const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)

const updateMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const goToNavRoute = (route: ERoutesNames = ERoutesNames.HOME) => {
  if (mobileMenuOpen.value) mobileMenuOpen.value = false
  console.log('goToNavRoute', route)
  goToRoute(route)
}

onMounted(() => {
  window.addEventListener('resize', updateMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMobile)
})

watch(y, (newY, oldY) => {
  hide.value = isMobile.value && !mobileMenuOpen.value && newY > oldY && newY > 100
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

  & > .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
        cursor: pointer;
        list-style: none;

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
    &.hide {
      top: calc(-1 * (var(--header-height) + var(--shadow-radius)));
    }

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
