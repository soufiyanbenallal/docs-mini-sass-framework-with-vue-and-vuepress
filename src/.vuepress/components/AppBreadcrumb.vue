<template>
    <ul class="breadcrumb"  :style=" color ? `color: ${color};`: null">
      <li>
        <a href="#0">COLLECTION</a>
      </li>
      <li>
        <span class="current-page">TOYS</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: ['color']
}
</script>