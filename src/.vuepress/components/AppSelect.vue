<template>
    <div class="select"  v-click-outside="clickOut"> 
      <!-- -->
        <div class="select-toggle" >
          <slot />
          <div class="select-input" v-if="isFocus && searchable">
            <input type="text" @click="toggleMenu()" v-model="search" @input="filteredList" :autoFocus='true'  >
            <span class="caret caret-x" @click="clear()"><i class="icon icon-x"></i></span>
            <span class="caret caret-down" @click="toggleMenu()"><i class="icon icon-chevron-up"></i></span>
          </div>
          <div class="select-input" v-else >
            <input type="text" @click="toggleMenu()" :value=" (selectedOption && selectedOption[name]) ? (prefix ? prefix : '')+ selectedOption[name] : placeholder" readonly>
            <span class="caret caret-x" @click="clear()"><i class="icon icon-x"></i></span>
            <span class="caret caret-down"><i class="icon icon-chevron-down"></i></span>
          </div>
        </div>
        <transition name="fade-up">
          <ul class="select-menu" v-if="showMenu">
              <li v-if="searchable && search !=='' && filteredList().length === 0"><div>{{notFound}}</div></li>
              <li v-for="(el, idx) in filteredList()" :key="idx" :class="{active:(selectedOption && selectedOption[name] === el[name])}">
                <span @click="updateOption(el)">{{ el[name] }}</span>
              </li>
          </ul>
        </transition>
    </div>
</template>

<script>
export default {
  directives:{
    'click-outside': {
      bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his children
        if (!(el === event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](event)
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  }
  },
  data () {
    return {
      search: '',
      isFocus: false,
      showMenu: false
    }
  },
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {
      type: Object
    },
    name: {
      type: String,
      default: 'name'
    },
    prefix: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Please select an item'
    },
    notFound: {
      type: String,
      default: 'item Not found'
    }
  },
  computed: {
    selectedOption: {
      get () {
        return this.selected
      },
      set (val) {
        // this.$emit('input', val)
      }
    }
    // selectedOption () {
    //   this.selectedOption = this.selected
    //   // if (this.selected) {
    //   // }
    // }
  },
  methods: {
    filteredList () {
      return this.options.filter(el => {
        return el[this.name].toLowerCase().includes(this.search.toLowerCase())
      })
    },
    updateOption (option, i) {
      this.showMenu = false
      this.isFocus = false
      if (JSON.stringify(option) !== JSON.stringify(this.selectedOption)) {
        this.selectedOption = option
        console.log('its updtated',this.selectedOption);
        this.$emit('change', option)
      }
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        this.isFocus = true
      } else {
        this.isFocus = false
      }
    },
    clear () {
      this.selectedOption = {}
      this.$emit('change', {})
      this.showMenu = false
      this.isFocus = false
    },
    clickOut () {
      this.showMenu = false
      this.isFocus = false
    }
  }
}
</script>
