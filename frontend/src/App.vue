<template>
    <div id="app" @wheel.passive="wheelScrolling">
            <router-view/>
    </div>
</template>


<script lang="js">


export default {
  name: "App",

  computed: {

  },

  methods: {
    wheelScrolling(event) {
          this.$store.commit('wheelScrollingDetect', event.deltaY)
      },
  }

}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    body, html {
        height: 100%;
        width: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
    }

</style>