import Time from "./time.js";
export default {
  install(Vue, options = {}) {
    Vue.directive("time", {
      bind(el, binding) {
        el.innerHTML = el.innerHTML ? el.innerHTML : el.textContent;
        el.innerHTML = Time.getFormatTime(binding.value);
      }
    });
  }
};
