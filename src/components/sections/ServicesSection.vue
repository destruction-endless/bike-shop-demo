<script setup lang="ts">
import Card from "../ui/Card.vue";
import { useScrollAnimation } from "../../composables/useScrollAnimation";

useScrollAnimation();

const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17l-5.1-5.1a2.5 2.5 0 113.54-3.54l5.1 5.1m-7.78 7.78a2.5 2.5 0 103.54-3.54M10 14l2-2m7.07-7.07a2.5 2.5 0 00-3.54 0L12 8.46" /></svg>`,
    title: "Custom Builds",
    description:
      "From frame to fork — we assemble dream bikes tailored to your riding style, terrain, and budget.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
    title: "Trade & Upgrade",
    description:
      "Trade in your old bike or parts and upgrade to something better. Smart cycling, smart spending.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>`,
    title: "Bike Parts",
    description:
      "New and second-hand parts available. Quality-checked and fairly priced for every build.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" /></svg>`,
    title: "Repair & Tuning",
    description:
      "Expert diagnosis, repair, and fine-tuning to keep your ride smooth, safe, and trail-ready.",
  },
];
</script>

<template>
  <section
    id="services"
    class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span
          class="scroll-animate font-body text-sm font-medium text-green-500 uppercase tracking-widest mb-4 block"
        >
          What We Do
        </span>
        <h2
          class="scroll-animate font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          style="transition-delay: 100ms"
        >
          Our Services
        </h2>
        <p class="font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need for your cycling journey — from your first build
          to your hundredth ride.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card v-for="service in services" :key="service.title">
          <div class="text-green-500 mb-4" v-html="service.icon" />
          <h3
            class="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-3"
          >
            {{ service.title }}
          </h3>
          <p
            class="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {{ service.description }}
          </p>
        </Card>
      </div>
    </div>
  </section>
</template>
