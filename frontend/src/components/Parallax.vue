<template>
  <main class="parallax-container" id = "parallax-container" >
    <TagLayer :transmittedWidth="parallaxLayerFullWidth" :offsetParallax="offsetParallax" :order="1" />
    <ParallaxLayer :order="2" :startDate="2010" :endDate="2028" :step="1" :ratio="1.0" :subscript="year"/>
    <!-- <ParallaxLayer /> -->
    <div  class="parallax-layer-1 parallax-layer parallax_container_level-1"  :style="{width: parallaxLayerFullWidth, left: parallaxScrollPosition + 'px'}" >
      <scale
        :startDate="2010"
        :endDate="2028"
        :step="1"
        :ratio="1.0"
      />
    </div>
<!-- <scroller :scrollDummyWidth="scaleLength"  v-on:offsetX = "scrollParallax" />
<editor/> -->
  </main>
</template>


<script lang="js">
  import ParallaxLayer from '@/components/ParallaxLayer'
  //import Editor from '@/components/Editor'
  
export default {
  name: "Parallax",
    components: {
    ParallaxLayer,
    //TagLayer,
    //Editor
  },
  data() {
    return {
      scale: {},
      scaleLength: 0,
      offsetParallax: 0,
      tagsData: null
      }
  },
  created() {
    //this.getData()
  },
  computed: {
    parallaxLayerFullWidth: function () {
      return  this.$store.state.scaleLength + 100 + 'px'
    },
    scrollParallaxBaseLayer() {
      return this.controlOfLeftPosition(this.$store.state.parallaxScrollPosition*0.5)
    },

    scrollParallax2Layer() {
      return this.controlOfLeftPosition(this.$store.state.parallaxScrollPosition*0.5*0.6)
    },

  },
  methods: {
    controlOfLeftPosition(position) {
      return position >= 0 ?  0 : position
    },

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