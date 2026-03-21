import { ref, onMounted } from "vue";

const theme = ref<"light" | "dark">("dark");

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      theme.value = saved;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.value = "dark";
    } else {
      theme.value = "dark";
    }
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  });

  return { theme, toggleTheme };
}
