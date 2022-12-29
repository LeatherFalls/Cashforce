<script setup>
import SideBar from "../components/SideBar.vue";
import InvoicesComponentVue from "../components/InvoicesComponent.vue";
</script>

<template>
  <main>
    <SideBar />
    <InvoicesComponentVue />
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: 100vh;
  width: 100vw;
}
</style>
