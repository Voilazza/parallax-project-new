import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgSource: '',
    parallaxScrollPosition: 0,
    wheelScrollDirection: 0,
    scaleLength: 0,
  },

  mutations: {
    wheelScrollingDetect(state, payload) 
    {
      let offset = 50;
      state.wheelScrollDirection = payload < 0 ? -offset : offset;
      //console.log(state.parallaxScrollPosition, state.wheelScrollDirection)
      let leftPosition = 0;
      let rightPosition = -(state.scaleLength - window.innerWidth + 100)
      console.log(leftPosition, window.innerWidth, state.parallaxScrollPosition + state.wheelScrollDirection)
      if (leftPosition >= state.parallaxScrollPosition + state.wheelScrollDirection && state.parallaxScrollPosition + state.wheelScrollDirection >= rightPosition) {
      state.parallaxScrollPosition += state.wheelScrollDirection
      }
      console.log(leftPosition, rightPosition)
    },

    setScaleLength(state, scaleWidth) {
      state.scaleLength =  scaleWidth
     
    },
  },

  actions: {
  },

  modules: {
  }
})
