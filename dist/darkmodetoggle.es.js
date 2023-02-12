import { ref as o, openBlock as D, createElementBlock as t, unref as e, createCommentVNode as c } from "vue";
function w() {
  const A = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", g = document.querySelector("html");
  g.classList.add(A);
  const M = o(A);
  return { theme: M, toggleTheme: () => {
    M.value === "light" ? (g.classList.add("dark"), M.value = "dark") : (g.classList.remove("dark"), M.value = "light");
  } };
}
const E = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJibGFjayIgdmlld0JveD0iMCAwIDIwIDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGgKICAgICAgZD0iTTE3LjI5MyAxMy4yOTNBOCA4IDAgMDE2LjcwNyAyLjcwN2E4LjAwMSA4LjAwMSAwIDEwMTAuNTg2IDEwLjU4NnoiCiAgICA+PC9wYXRoPgogIDwvc3ZnPg==", T = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDIwIDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGgKICAgICAgZD0iTTEwIDJhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDBWM2ExIDEgMCAwMTEtMXptNCA4YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHptLS40NjQgNC45NWwuNzA3LjcwN2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTR6bTIuMTItMTAuNjA3YTEgMSAwIDAxMCAxLjQxNGwtLjcwNi43MDdhMSAxIDAgMTEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMHpNMTcgMTFhMSAxIDAgMTAwLTJoLTFhMSAxIDAgMTAwIDJoMXptLTcgNGExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY1IDUuMDVsLS43MDgtLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3ptMS40MTQgOC40ODZsLS43MDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDEuNDE0ek00IDExYTEgMSAwIDEwMC0ySDNhMSAxIDAgMDAwIDJoMXoiCiAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgLz4KPC9zdmc+", u = ["src"], C = ["src"], N = {
  __name: "DarkModeToggle",
  setup(A) {
    const { theme: g, toggleTheme: M } = w();
    return (l, I) => (D(), t("button", {
      onClick: I[0] || (I[0] = (...s) => e(M) && e(M)(...s)),
      class: "flex items-center justify-self-end h-full w-full"
    }, [
      e(g) === "dark" ? (D(), t("img", {
        key: 0,
        class: "h-full w-full",
        src: e(T)
      }, null, 8, u)) : c("", !0),
      e(g) === "light" ? (D(), t("img", {
        key: 1,
        class: "h-full w-full",
        src: e(E)
      }, null, 8, C)) : c("", !0)
    ]));
  }
};
export {
  N as DarkModeToggle
};
