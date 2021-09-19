// use :  v-tooltip="'text or message...'"
exports = module.exports = {
  bind (el, binding, vnode) {
    el.addEventListener('mouseenter', function () {
      el.classList.add('tooltip')
      const tooltip = document.createElement('span')
      // const newContent = document.createTextNode("Hi there and greetings!");
      tooltip.setAttribute('class', 'tooltiptext')
      tooltip.setAttribute('id', 'tooltiptext')
      tooltip.innerHTML = binding.value
      // tooltip.classList.add("tooltiptext");
      // tooltip.appendChild(newContent);
      el.appendChild(tooltip)
    })
    el.addEventListener('mouseleave', function () {
      const elemToRemove = document.getElementById('tooltiptext')
      el.removeChild(elemToRemove)
    })
  },
  unbind: function (el) {
    // el.style.style.background = '#fae'
  }
}
