<template>
<div class="parallax_container_level-2 layer_order" :style="{width: transmittedWidth, left: offsetParallax + 'px'}">
   <tag 
             :scaleId="1235"
            :version="1.0"
    >
   </tag>
</div>

</template>
<script>
  import Tag from '@/components/Tag'

 export default {
  name: "TagLayer",
   components: {
     Tag
  },
  props: {
   version: Number,
   transmittedWidth: String,
   offsetParallax: Number,
   order: Number
        },

  data() {
    return {

       }
        },

  methods: {
            someMethod() {
                //this.position;
            },
        }
    }

</script>
<style >
.parallax_container_level-1 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;  
}

.parallax_container_level-2 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}

.layer_order {
  z-index: 10;
  display: flex;
  align-items: flex-end;
  position: relative;
}

</style>

