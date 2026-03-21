<script setup lang="ts">
import Button from "../ui/Button.vue";

const MESSENGER_URL =
  "https://m.me/61560962334633?text=Hi%20JH%20Bikes!%20I'm%20interested%20in%20a%20bike%20build.";
</script>

<template>
  <section
    id="cta"
    class="py-20 lg:py-28 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden"
  >
    <!-- Decorative elements -->
    <div
      class="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
    ></div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2
        class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
      >
        Ready to Ride?
      </h2>
      <p
        class="font-body text-lg sm:text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Whether you're building your first bike or upgrading your current setup,
        we're here to help. Reach out and let's make it happen.
      </p>
      <Button :href="MESSENGER_URL" variant="secondary" size="lg" external>
        Message JH Bikes Now
      </Button>
    </div>
  </section>
</template>
