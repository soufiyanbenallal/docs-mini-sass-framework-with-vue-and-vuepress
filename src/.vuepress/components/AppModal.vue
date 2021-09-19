<template>
  <transition name="modal">
    <div class="modal f-center">
      <div>
        <div class="overlay active" @click="$emit('dismiss')">
        </div>
        <div class="modal-container container">

          <div class="modal-header flex fy-center" v-if="header">
            <div class="w-100">
              <slot name="header"><h3 class="m-0">Default title</h3></slot>
            </div>
            <button class="p-21" @click="$emit('dismiss')"><i class="icon icon-x"></i></button>
          </div>

          <div class="modal-body"><slot>default body</slot></div>

          <div class="modal-footer flex fx-end" v-if="footer">
            <slot name="footer">
              <button class="modal-default-button p-2 button default-button" @click="$emit('dismiss')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    footer: {
      type: Boolean,
      default: true
    },
    header: {
      type: Boolean,
      default: true
    },
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .modal {
      z-index: 10001 !important;
  }
</style>
