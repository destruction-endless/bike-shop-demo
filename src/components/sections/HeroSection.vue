<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Button from "../ui/Button.vue";

const FB_PAGE_URL = "https://www.facebook.com/61560962334633";
const MESSENGER_URL =
  "https://m.me/61560962334633?text=Hi%20JH%20Bikes!%20I'm%20interested%20in%20a%20bike%20build.";

const parallaxOffset = ref(0);
const heroVisible = ref(false);

const onScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  requestAnimationFrame(() => {
    heroVisible.value = true;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <section id="hero" class="relative h-screen overflow-hidden bg-black">
    <video
      class="absolute inset-0 z-0 h-full w-full object-cover brightness-110 contrast-110"
      autoplay
      muted
      loop
      playsinline
      poster="/images/hero-fallback.jpg"
      preload="metadata"
    >
      <source src="/videos/jhbikestore_hero_video.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 z-10 bg-black/30"></div>

    <!-- Animated background layer (parallax) -->
    <div
      class="absolute inset-0 z-5 transition-transform duration-100 ease-linear"
      :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }"
    >
      <div
        class="absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-2xl hero-float-1"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-400/8 rounded-full blur-2xl hero-float-2"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl hero-float-3"
      ></div>
    </div>

    <!-- Floating workshop elements -->
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      :style="{ transform: `translateY(${parallaxOffset * 0.15}px)` }"
    >
      <!-- Gear icon -->
      <div
        class="absolute top-[15%] left-[10%] sm:left-[15%] text-green-500/20 hero-spin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 sm:h-28 sm:w-28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <!-- Wrench icon -->
      <div
        class="absolute bottom-[20%] right-[8%] sm:right-[12%] text-green-500/15 hero-float-tool"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 sm:h-24 sm:w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
          />
        </svg>
      </div>

      <!-- Second gear (smaller) -->
      <div
        class="absolute top-[60%] left-[5%] text-emerald-500/10 hero-spin-reverse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14 sm:h-20 sm:w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <!-- Chain-like decorative lines -->
      <div
        class="absolute top-[30%] right-[20%] h-px w-32 bg-linear-to-r from-transparent via-green-500/20 to-transparent hero-chain-1"
      ></div>
      <div
        class="absolute top-[70%] left-[25%] h-px w-40 bg-linear-to-r from-transparent via-emerald-500/15 to-transparent hero-chain-2"
      ></div>
    </div>

    <div class="absolute top-0 left-0 z-20 h-20 w-full bg-black"></div>

    <!-- Hero content (parallax foreground) -->
    <div
      class="relative z-30 flex h-full items-center justify-center pt-16 sm:pt-20"
    >
      <div
        class="px-4 text-center sm:px-6 lg:px-8"
        :style="{ transform: `translateY(${parallaxOffset * 0.1}px)` }"
      >
        <div class="mx-auto max-w-4xl">
          <!-- Title -->
          <h1
            class="mb-6 font-heading text-5xl font-bold tracking-tight text-white transition-all duration-700 ease-out sm:text-6xl lg:text-8xl"
            :class="
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            JH <span class="text-green-500">Bikes</span>
          </h1>

          <!-- Subtitle -->
          <p
            class="mx-auto mb-12 max-w-2xl font-body text-lg leading-relaxed text-gray-200 transition-all duration-700 ease-out delay-200 sm:text-xl lg:text-2xl"
            :class="
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Custom Builds. Smart Upgrades. Honest Prices.
          </p>

          <!-- CTA -->
          <div
            class="flex flex-col items-center justify-center gap-4 transition-all duration-700 ease-out delay-500 sm:flex-row"
            :class="
              heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            <Button :href="FB_PAGE_URL" variant="primary" size="lg" external>
              Get Started
            </Button>
            <Button :href="MESSENGER_URL" variant="outline" size="lg" external>
              Message Now
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 animate-bounce transition-all duration-700 delay-700"
      :class="heroVisible ? 'opacity-100' : 'opacity-0'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </section>
</template>
