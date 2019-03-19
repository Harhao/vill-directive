import Time from "./time.js";
export default {
  install(Vue, options = {}) {
    Vue.directive("time", {
      bind(el, binding) {
        el.innerHTML = el.innerHTML ? el.innerHTML : el.textContent;
        el.innerHTML = Time.getFormatTime(binding.value);
      }
    });
    Vue.directive("clock", {
      bind(el, binding) {
        el.timeout = setInterval(function() {
          const value = Date.now();
          el.innerText = Time.getFormatTime(value);
        }, 1000);
      },
      unbind() {
        clearInterval(el.timeout);
        delete el.timeout;
      }
    });
  }
};
