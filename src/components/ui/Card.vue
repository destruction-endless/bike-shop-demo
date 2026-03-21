<script setup lang="ts">
defineProps<{
  highlighted?: boolean;
}>();
</script>

<template>
  <div
    class="rounded-2xl p-6 transition-all duration-300 border"
    :class="[
      highlighted
        ? 'bg-green-600 text-white border-green-600 shadow-2xl scale-105'
        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1',
    ]"
  >
    <slot />
  </div>
</template>
