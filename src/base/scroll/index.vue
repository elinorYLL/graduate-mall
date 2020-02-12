<template>
  <div class="scroll">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide>
        <slot name="header"></slot>
      </swiper-slide>
      <swiper-slide>
        <slot name="center"></slot>
      </swiper-slide>
      <swiper-slide>
        <slot name="footer"></slot>
      </swiper-slide>
      <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "MeScroll",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? ".swiper-scrollbar" : null,
          hide: true
        },
        observer: true,
        observeParents: true
      }
    };
  }
};
</script>
<style scoped>
.scroll {
  width: 100%;
  height: 100%;
}
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
/* .swiper-wrapper {
  height: auto !important;
} */

.swiper-slide,
.swiper-slide-active {
  height: auto !important;
}
</style>
