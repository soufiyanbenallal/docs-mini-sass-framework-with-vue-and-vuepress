<template>
  <div class="search-input">
    <div class="input-icon-holder">
      <i class="icon icon-search"></i>
      <input type="search" name="q" class="form-control" placeholder="Start typing to search">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Appsearch',
    props: ['settings']
  }
</script>