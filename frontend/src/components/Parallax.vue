<template>
    <main class="parallax-container"  @wheel.passive="wheelScrollingOffset">
    <TagLayer :transmittedWidth = "scaleFullWidth" :offsetParallax = "offsetParallax" :order = "1"/>
    <div class="parallax-layer-2 parallax-layer parallax_container_level-2" :style="{width: scaleFullWidth, transform: 'translateX(' + offsetParallax*0.6 + 'px)'}">
      <scale
      :startDate="2010"
      :endDate="2028"
      :step="1"
      :ratio="0.95"
    />
    </div>
    <div class="parallax-layer-1 parallax-layer parallax_container_level-1" :style="{width: scaleFullWidth, transform: 'translateX(' + offsetParallax + 'px)'}">
      <scale
      v-on:returnScaleLength = "getScrollLength"
      :startDate="2010"
      :endDate="2028"
      :step="1"
      :ratio="1.0"
    />
    </div>
<scroller :scrollDummyWidth="scaleLength"  v-on:offsetX = "scrollParallax" />
<editor/>
  </main>
</template>


<script lang="js">
  import Scroller from '@/components/Scroller'
  import TagLayer from '@/components/TagLayer'
  import Scale from '@/components/Scale'
  import Editor from '@/components/Editor'
  

export default {
  name: "Parallax",
    components: {
    Scale,
    Scroller,
    TagLayer,
    Editor
  },

  data() {
    return {
      scale: {},
      scaleLength: 35,
      offsetParallax: 0,
      tagsData: null,
      }
  },

  created() {
    //this.getData()
  },

  computed: {
    scaleFullWidth: function () {
      return  this.scaleLength + 20 + 'px'
    }
  },

  methods: {
    getScrollLength(length) {
      this.scaleLength = length
    },

    scrollParallax(data) {
      this.offsetParallax = data - 20;
    },

     wheelScrollingOffset(event) {
       this.$root.$emit('wheelScroll', event.deltaY)
    },

    }

}
</script>

<style lang="scss">
   
.parallax-container {
    height: 100%;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
}

.parallax-layer {
    text-align: center;
    //height: 50%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    z-index: 2;
}

.parallax-layer-2 {
  background-image: url("../images/skale.svg");
  background-size: cover;
}

.parallax-layer-2 div {
  transform: scale(0.8, 0.8);
  transform-origin: left;
}

.parallax-layer-1 {
  background-image: url("../images/skale2.svg");
  background-size: cover;
  box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.5);
}
</style>