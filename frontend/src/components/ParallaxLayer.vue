<template>
    <div class="parallax-layer parallax-layer-2 parallax_container_level-2" :style="{width: parallaxLayerFullWidth, left: scrollParallaxLayerPosition + 'px'}" >
     <scale
        :startDate=startDate
        :endDate=endDate
        :step=step
        :ratio=ratio
      />
    </div>
</template>


<script lang="js">
  import Scale from '@/components/Scale'
  
export default {
  name: "ParallaxLayer",
    components: {
    Scale,
  },
  props: {
   order: {type: Number, required: true},
   step: {type: Number, default: 1, required: false},
   startDate: {type: Number, required: true},
   endDate: {type: Number, required: true},
   ratio: {type: Number, default: 1.0, required: false},
   subscript: {type: String, default: 'year', required: false},
        },

  data() {
    return {
      scaleLength: 0,
      offsetParallax: 0,
      }
  },
  
  created() {
    //this.getData()
  },
  computed: {
    parallaxLayerFullWidth: function () {
      return  this.$store.state.scaleLength + 100 + 'px'
    },
    scrollParallaxLayerPosition() {
      return this.$store.state.parallaxScrollPosition
    },

    scrollParallax2Layer() {
      return this.controlOfLeftPosition(this.$store.state.parallaxScrollPosition)
    },

  },

  methods: {
    // controlOfEdgePosition(position) {
    //   if(this.$store.state.parallaxScrollPosition)
      
    // },

    // controlOfLeftPosition(position) {
    //   console.log(window.screen.availWidth)
    //   return position >= 0 ?  0 : position
    // },

    getScrollLength(length) {
      this.scaleLength = length + 100
    },

    //  wheelScrollingOffset(event) {
    //    this.$root.$emit('wheelScroll', event.deltaY)
    // },
    }
}
</script>

<style lang="scss">
.parallax-container {
  min-width: 100%;

}

.parallax-layer {
  height: 30%;
  min-width: 100%;
  display: flex;
  align-items: flex-end;
}

.parallax_container_level-1 {
  position: fixed;
  left:0;
  top: 70%;
}

.parallax_container_level-2 {
  position: fixed;
  left:0;
  top:40%;
}



.parallax-layer-2 {
  background-image: url("../images/skale.svg");
  background-size: cover;
}

.parallax-layer-1 {
  background-image: url("../images/skale2.svg");
  background-size: cover;
  box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.5);
}
</style>