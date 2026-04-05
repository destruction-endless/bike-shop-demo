<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Button from "../ui/Button.vue";

const embeds = [
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dMcKLCX5iyMeHeK93NU6U2SSaLa26MxgV8K1wgzngY7XAJ5PjCPpo2Q4d9BiTkFwl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="329" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0yPPNAwkTsvexYvKynd8fvNnG4Nnto8RviCwf8ihZq8iG3mkLe9soHRDeAgfQM2vQl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0fjS4RxzfKx9t1NZhUtgpvr5UwEBSG5y5eDTY2JjsFDHC39xF1ujw2nCSNZK2gaKRl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ZjAJdftKAUQx1boBqLqa8bwL27swiSX7eg8XyXt8APSobm2oAAe6zw43SkwjySJAl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="786" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02yq9hn5pCbD13tZeiTxZMhaX4ZxVf1FMtpUkKGyXayteg8HxGPPzFS3qmEwt9d3ghl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0JfUrEKGMoRRtDbZJ4EGpMVkh8sU3cyoKCce2jWeELKnxERowiDDDmiSnqfoLfTHwl%26id%3D61560962334633&show_text=true&width=500" width="100%" height="689" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
  {
    html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02XETUyuDqEZeLMaMh7kkN9Umv6G7ivdqGwMTW4LhaVTWCeSvqJJuX3a7LDNbnFHxul%26id%3D61560962334633&show_text=true&width=500" width="100%" height="709" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
  },
];

const cardRefs = ref<HTMLElement[]>([]);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("gallery-visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  cardRefs.value.forEach((el) => {
    if (el) observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    id="gallery"
    class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span
          class="font-body text-sm font-medium text-green-500 uppercase tracking-widest mb-4 block"
        >
          Our Work
        </span>
        <h2
          class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Latest Builds
        </h2>
        <p class="font-body text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Real builds and upgrades from JH Bikes
        </p>
      </div>

      <!-- Masonry Layout -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(item, index) in embeds"
          :key="index"
          :ref="
            (el) => {
              if (el) cardRefs[index] = el as HTMLElement;
            }
          "
          class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl gallery-card"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="rounded-xl overflow-hidden" v-html="item.html" />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <Button
          href="https://www.facebook.com/61560962334633"
          variant="primary"
          size="lg"
        >
          View More on Facebook
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-card {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-visible {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
</style>
