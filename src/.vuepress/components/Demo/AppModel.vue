<template>
  <p class="demo">
    <button class="button primary-button" @click="showModal = true ">Open Modal</button>
    <AppModal v-if="showModal" @dismiss="showModal = false"/>
  </p>
</template>

<script>
  import AppModal from "../AppModal";
  export default {
    components:{
      AppModal,
    },
    data () {
      return {
        showModal:false
      }
    }
  }
</script>
