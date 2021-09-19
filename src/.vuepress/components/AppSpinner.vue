<template  >
    <transition name="load" v-if="show">
       <div class="loading flex f-center" :style="{zIndex:zIndex}">
           <svg class="spinner" :width="size" :height="size" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path"  :style=" color ? `stroke:${color}!important;` : null" fill="none" :stroke-width="stroke" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
            <span v-if="text" class="pl-2">{{text}}</span>
       </div>
    </transition>
</template>
<script>

export default {
  name: 'AppSpinner',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '30px'
    },
    stroke: {
      type: String,
      default: '4'
    },
    color: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1
    }
  }
}
</script>
