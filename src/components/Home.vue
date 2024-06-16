<template>
  <div class="flex flex-col gap-12 w-full sd:px-24 md:flex-row">
    <transition name="fade" mode="in-out">
      <ConverterApp v-if="showComponents" />
    </transition>
    <transition name="fade" mode="in-out">
      <ConversionTable v-if="showComponents" />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ConverterApp from './ConverterApp.vue';
import ConversionTable from './ConversionTable.vue';

const showComponents = ref(false);

onMounted(() => {
  showComponents.value = true;
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>