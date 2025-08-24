<template>
  <header>
    <div class="nav-container">
      <div class="logo-wrapper">
        <svgHome />
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
import svgHome from '@/assets/svgHome.vue'
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background-color: #f8f9fa;

  & > .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    padding: 0 1rem;

    & > .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    & > nav {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      & > .link {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
}
</style>
