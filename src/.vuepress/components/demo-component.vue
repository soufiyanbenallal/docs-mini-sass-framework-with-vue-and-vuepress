<template>
  <p class="demo p-5 flex test">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello this is <demo-component>'
      }
    }
  }
</script>
