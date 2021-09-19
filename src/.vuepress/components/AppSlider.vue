<template>
  <div class="slider fc-slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="i in images" :key="i.id" class="slide">
        <img :src="i.image" alt="slide" class="slide-thumbnail">
        <div class="slide-caption-2" v-if="searchByVehicle">
          <div class="lds flex f-center" v-if="selectedVehicle" style="background-color: #000000a3;">
            <app-spinner size="40px" stroke="6" />
          </div>
          <app-select-vehicle />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import AppSelectVehicle from './AppSelectVehicle.vue'
import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'
export default {
  name: 'Appslider',
  props: ['settings', 'images', 'images2'],
  components: {
    Swiper,
    SwiperSlide,
    AppSelectVehicle
  },
  data () {
    return {
      options: [],
      searchByVehicle: true,
      selectedVehicle: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 1,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      garage: { list: [], currentVehicle: 0 }
    }
  },
  mounted () {
    if (localStorage.partNumber) {
      this.partNumber = localStorage.partNumber
    }
    if (localStorage.garage) {
      this.garage = JSON.parse(localStorage.garage)
      if (this.garage.list) {
        this.searchByVehicle = false
      }
    }

    this.$bus.$on('vehicle:setsearch', res => {
      this.searchByVehicle = res
    })
    this.$bus.$on('vehicle:selected:loading', (res) => {
      this.selectedVehicle = res
      setTimeout(() => {
        this.selectedVehicle = false
        this.searchByVehicle = false
      }, 1500)
    })
  },
  created () {
  }
}
</script>
<style lang="scss" >
  .swiper {
    height: 100%;
  }

  .slide-caption-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    text-align: center;
  }

  .fc-slider {
    z-index: 0;
    position: relative;

    .slider .slide-caption {
      max-width: 700px;
    }

    .slide {
      color: #fff;

      h1.slide-heading {
        font-size: 45px;
      }

      .slide-subheading {
        padding-bottom: 30px;
      }
    }

  }
</style>
