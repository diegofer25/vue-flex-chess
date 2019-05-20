export default {
  bind(el, binding) {
    if (typeof binding !== 'function') return;
    el.clickOutside = e => {
      if (binding.modifiers.bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };
    document.addEventListener('click', el.clickOutside);
  },
  unbind(el) {
    document.removeEventListener('click', el.clickOutside);
    el.clickOutside = null;
  },
}
