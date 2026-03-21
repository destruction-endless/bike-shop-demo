<script setup lang="ts">
defineProps<{
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
    :class="[
      size === 'sm'
        ? 'px-4 py-2 text-sm'
        : size === 'lg'
          ? 'px-8 py-4 text-lg'
          : 'px-6 py-3 text-base',
      variant === 'secondary'
        ? 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 focus:ring-gray-400'
        : variant === 'outline'
          ? 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 focus:ring-green-400'
          : variant === 'ghost'
            ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-400'
            : 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 focus:ring-green-500 shadow-lg hover:shadow-xl',
    ]"
  >
    <slot />
  </component>
</template>
