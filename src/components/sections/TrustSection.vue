<script setup lang="ts">
import { useScrollAnimation } from "../../composables/useScrollAnimation";

useScrollAnimation();
</script>

<template>
  <section
    id="trust"
    class="py-20 lg:py-28 bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <!-- Text Content -->
        <div>
          <span
            class="scroll-animate font-body text-sm font-medium text-green-500 uppercase tracking-widest mb-4 block"
          >
            Why JH Bikes
          </span>
          <h2
            class="scroll-animate font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            style="transition-delay: 100ms"
          >
            Built on Trust,<br />
            <span class="text-green-500">Not Markup</span>
          </h2>
          <div class="space-y-4">
            <p
              class="scroll-animate font-body text-gray-600 dark:text-gray-400 leading-relaxed"
              style="transition-delay: 200ms"
            >
              JH Bikes started from a simple passion — a love for cycling and a
              frustration with how overpriced and dishonest the market can be.
              We believe every rider deserves a quality bike without the hidden
              fees and inflated markups.
            </p>
            <p
              class="scroll-animate font-body text-gray-600 dark:text-gray-400 leading-relaxed"
              style="transition-delay: 300ms"
            >
              We're not a big corporation. We're riders who build bikes, know
              every part by name, and treat every customer like a riding buddy.
              Whether you're buying your first bike or upgrading your dream rig,
              we'll give you honest advice and fair prices — always.
            </p>
          </div>
        </div>

        <!-- Values Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="(value, index) in [
              {
                icon: '🤝',
                title: 'Honest Pricing',
                desc: 'No hidden fees. No inflated markups. What you see is what you pay.',
              },
              {
                icon: '🧠',
                title: 'Deep Knowledge',
                desc: 'We know every component, every spec. We\'ll help you make the right choice.',
              },
              {
                icon: '💰',
                title: 'Affordable Options',
                desc: 'Quality builds for every budget — from starter rigs to pro setups.',
              },
              {
                icon: '🔧',
                title: 'Hands-On Care',
                desc: 'Every bike we build is assembled, tuned, and tested by hand.',
              },
            ]"
            :key="value.title"
            class="scroll-animate bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1"
            :style="{ transitionDelay: `${index * 100 + 200}ms` }"
          >
            <span
              class="text-3xl mb-3 block"
              role="img"
              :aria-label="value.title"
              >{{ value.icon }}</span
            >
            <h3
              class="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-2"
            >
              {{ value.title }}
            </h3>
            <p
              class="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {{ value.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
