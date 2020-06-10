<template>
  <div class="scroll-container" id="scroll-container" @scroll.prevent="dummyOffset">
    <div class="scroll-dummy" ref="scrollDummy" :style="{width: scrollDummyWidth + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Scroller",
  // props: {
  //   scrollDummyWidth: Number
  // },

  data() {
    return {
      scrollDummyWidth: 0,
      offsetParallax: 0,
      }
  },

  methods: {
    dummyOffset() {
      this.$emit(
        "offsetX",
        this.$refs.scrollDummy.getBoundingClientRect().left
      );
    }
  },

   mounted() {
      this.scrollDummyWidth = this.$store.state.scaleLength + 100
      console.log(this.onWheelScrolling)
      document.getElementById('scroll-container').scrollBy({ left: this.onWheelScrolling, top: 0, behavior: "smooth" });
    },


    computed: {
      onWheelScrolling() {
        // console.log(document.getElementById('scroll-container'))
         return this.$store.state.wheelScrollDirection*10
      },
  },

};
</script>

<style scoped>
.scroll-container {
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  height: 3%;
  width: 100%;
  overflow: auto;
}

.scroll-dummy {
  position: absolute;
  left: 0px;
  height: 100%;
  min-height: 1px;
}
</style>