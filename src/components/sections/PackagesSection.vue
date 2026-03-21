<script setup lang="ts">
import Card from "../ui/Card.vue";
import Button from "../ui/Button.vue";
import { useScrollAnimation } from "../../composables/useScrollAnimation";

const FB_PAGE_URL = "https://www.facebook.com/61560962334633";

useScrollAnimation();

const packages = [
  {
    name: "Starter",
    price: "₱8k – ₱15k",
    description: "Perfect for beginners and daily commuters.",
    features: [
      "Steel or alloy frame",
      "Reliable drivetrain",
      "Basic components",
      "Free assembly",
      "Basic tune-up included",
    ],
    highlighted: false,
  },
  {
    name: "Mid Build",
    price: "₱15k – ₱30k",
    description: "For enthusiasts who want performance and value.",
    features: [
      "Alloy or carbon fork",
      "Shimano mid-tier groupset",
      "Tubeless-ready wheelset",
      "Free assembly & fitting",
      "Full tune-up included",
    ],
    highlighted: true,
  },
  {
    name: "Pro Build",
    price: "₱30k+",
    description: "Race-ready rigs for serious riders.",
    features: [
      "Carbon or premium alloy frame",
      "Top-tier groupset",
      "Premium wheelset",
      "Custom fit session",
      "Lifetime tune-up support",
    ],
    highlighted: false,
  },
];
</script>

<template>
  <section
    id="packages"
    class="py-20 lg:py-28 bg-white dark:bg-gray-950 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span
          class="scroll-animate font-body text-sm font-medium text-green-500 uppercase tracking-widest mb-4 block"
        >
          Our Builds
        </span>
        <h2
          class="scroll-animate font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          style="transition-delay: 100ms"
        >
          Build Packages
        </h2>
        <p class="font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose a package that fits your riding goals and budget. Every build
          is assembled with care.
        </p>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <Card
          v-for="pkg in packages"
          :key="pkg.name"
          :highlighted="pkg.highlighted"
        >
          <div class="text-center">
            <h3
              class="font-heading text-lg font-semibold mb-1"
              :class="
                pkg.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
              "
            >
              {{ pkg.name }}
            </h3>
            <p
              class="font-heading text-3xl font-bold mb-2"
              :class="pkg.highlighted ? 'text-white' : 'text-green-500'"
            >
              {{ pkg.price }}
            </p>
            <p
              class="font-body text-sm mb-6"
              :class="
                pkg.highlighted
                  ? 'text-green-100'
                  : 'text-gray-500 dark:text-gray-400'
              "
            >
              {{ pkg.description }}
            </p>
          </div>

          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in pkg.features"
              :key="feature"
              class="flex items-start gap-2 text-sm font-body"
              :class="
                pkg.highlighted
                  ? 'text-green-50'
                  : 'text-gray-600 dark:text-gray-400'
              "
            >
              <svg
                class="h-5 w-5 flex-shrink-0 mt-0.5"
                :class="pkg.highlighted ? 'text-white' : 'text-green-500'"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <Button
            :href="FB_PAGE_URL"
            :variant="pkg.highlighted ? 'secondary' : 'primary'"
            class="w-full text-center"
            external
          >
            Get Started
          </Button>
        </Card>
      </div>
    </div>
  </section>
</template>
