<template>
  <div class="flex flex-col min-h-screen bg-slate-900 text-gray-100">
    <Navbar />
    <div class="container mx-auto px-4 py-6 flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row lg:w-4/5">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>