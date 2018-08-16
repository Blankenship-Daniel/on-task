import "./style.css";
import { Router, RouterEvents } from "./lib/router";

const pageEls = [].slice.call(document.querySelectorAll("section[page]"));

// Router
Router.init();
window.addEventListener(RouterEvents.ROUTE_CHANGE, (ev: any) => {
  pageEls.forEach(pageEl => pageEl.classList.remove("active"));

  try {
    document
      .querySelector(`section[page='${ev.detail}']`)
      .classList.add("active");
  } catch (e) {
    document.querySelector(`section[page='/404']`).classList.add("active");
  }
});
