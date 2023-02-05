import { ref } from "vue";

export default function useDarkTheme() {
  const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const html = document.querySelector("html");
  html.classList.add(preferedTheme);
  const theme = ref(preferedTheme);
  const toggleTheme = () => {
    if (theme.value === "light") {
      html.classList.add("dark");
      theme.value = "dark";
    } else {
      html.classList.remove("dark");
      theme.value = "light";
    }
  };
  return { theme, toggleTheme };
}