<template>
        <div class="main-container">
            <header>
                <h1>
                    Увлекательная история моих приключений
                </h1>
            </header>
        <parallax/>
        </div>
</template>

<script>
// import axios from 'axios'
// import Scale from '@/components/Scale'
// import Scroller from '@/components/Scroller'
// import Tag from '@/components/Tag'
 import Parallax from '@/components/Parallax';

export default {
  name: "Home",
  components: {
    Parallax
  },

  data() {
    return {
      scale: {},
      scaleLength: 35,
      offsetParallax: 0,
      tagsData: null
    };
  },

}


</script>

<style lang="scss">

    .main-container {
        height: 100%;
        width: 100%;
        display: block;
        /*background-image: linear-gradient(to right top, #c9b6a7, #c4bba7, #bcc1ab, #b3c6b3, #abcabf, #abc9be, #abc8bd, #abc7bc, #b2c1b0, #b8baa9, #bcb4a5, #bcaea5);*/
        background: white;
    }

    .main-container header h1 {
        font-family: 'Poiret One', cursive;
        font-weight: lighter;
        font-size: 40px;
    }

    .main-container header {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        height: 40%;
        width: 100%;
    }
</style>