<script setup lang="ts"></script>

<template>
  <footer
    class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="font-heading text-xl font-bold text-green-500 mb-3">
            JH Bikes
          </h3>
          <p
            class="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
          >
            Custom Builds. Smart Upgrades. Honest Prices.<br />
            Your trusted bike shop in Bulacan.
          </p>
        </div>

        <!-- Location -->
        <div>
          <h4
            class="font-heading text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3"
          >
            Location
          </h4>
          <address
            class="font-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed not-italic"
          >
            Pulong Buhangin,<br />
            Sta. Maria, Bulacan<br />
            Philippines
          </address>
        </div>

        <!-- Social / Contact -->
        <div>
          <h4
            class="font-heading text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3"
          >
            Connect
          </h4>
          <div class="flex flex-col gap-2">
            <a
              href="https://m.me/61560962334633?text=Hi%20JH%20Bikes!%20I'm%20interested%20in%20a%20bike%20build."
              target="_blank"
              rel="noopener noreferrer"
              class="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 inline-flex items-center gap-2"
              aria-label="Facebook Messenger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.455-1.9c.92.256 1.896.393 2.867.393 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.016 12.453l-2.55-2.722-4.98 2.722 5.474-5.81 2.614 2.722 4.916-2.722-5.474 5.81z"
                />
              </svg>
              Facebook Messenger
            </a>
            <a
              href="https://www.facebook.com/61560962334633"
              target="_blank"
              rel="noopener noreferrer"
              class="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 inline-flex items-center gap-2"
              aria-label="Facebook Page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              Facebook Page
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-1"
      >
        <p
          class="font-body text-sm text-center text-gray-500 dark:text-gray-500"
        >
          &copy; {{ new Date().getFullYear() }} JH Bikes. All rights reserved.
        </p>
        <a
          href="https://kingzeusbiong.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-center font-body text-xs text-gray-400 dark:text-gray-600 hover:text-green-500 transition underline-offset-4 hover:underline"
        >
          Website by kingzeusbiong.dev
        </a>
      </div>
    </div>
  </footer>
</template>
