<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import TrustSection from "./components/sections/TrustSection.vue";
import ServicesSection from "./components/sections/ServicesSection.vue";
import PackagesSection from "./components/sections/PackagesSection.vue";
import GallerySection from "./components/sections/GallerySection.vue";
import CTASection from "./components/sections/CTASection.vue";

const MESSENGER_URL =
  "https://m.me/61560962334633?text=Hi%20JH%20Bikes!%20I'm%20interested%20in%20a%20bike%20build.";
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300"
  >
    <Navbar />
    <main>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PackagesSection />
      <GallerySection />
      <CTASection />
    </main>
    <Footer />

    <!-- Floating Messenger Button -->
    <a
      :href="MESSENGER_URL"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Message JH Bikes on Messenger"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.455-1.9c.92.256 1.896.393 2.867.393 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.016 12.453l-2.55-2.722-4.98 2.722 5.474-5.81 2.614 2.722 4.916-2.722-5.474 5.81z"
        />
      </svg>
    </a>
  </div>
</template>
