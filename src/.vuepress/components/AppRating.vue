
<template>
  <div class="rating">
    <ul class="list" :style="{fontSize:size ? size + 'px' : 30 + 'px'}">
      <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'icon icon-star' : 'icon icon-star'"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AppRating',
  props: ['value', 'maxStars', 'hasCounter', 'size'],
  data () {
    return {
      stars: this.value
    }
  },
  watch: {
    value () {
      this.rate(this.value)
    }
  },
  methods: {
    rate (star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        // this.stars = this.stars === star ? star - 1 : star
        this.stars = star
        this.$emit('update:rate', star)
      }
    }
  }
}
</script>
