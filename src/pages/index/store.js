// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    horror: [{
      id: 1,
      title: 'Strange Terrors',
      author: {
        name: 'Masha Mellon'
      }
    }, {
      id: 2,
      title: 'The Witch-Gunfighter',
      author: {
        name: 'Sidney Pie'
      }
    }, {
      id: 3,
      title: 'Canary Call',
      author: {
        name: 'Ava Cardo'
      }
    }],
    fantasy: [{
      id: 4,
      title: 'Fog and a Bridge',
      author: {
        name: 'Mac Roni'
      }
    }, {
      id: 5,
      title: 'The Woods Under',
      author: {
        name: 'Carly Flower'
      }
    }, {
      id: 6,
      title: 'Green Crown',
      author: {
        name: 'Walter Mellon'
      }
    }]
  },
  mutations: {
    shuffleHorrorBooks: (state) => {
      let shuffledBooks = [{
        id: 1,
        title: 'Strange Terrors',
        author: {
          name: 'Masha Mellon'
        }
      }, {
        id: 2,
        title: 'The Witch-Gunfighter',
        author: {
          name: 'Sidney Pie'
        }
      }, {
        id: 3,
        title: 'Canary Call',
        author: {
          name: 'Ava Cardo'
        }
      }, {
        id: 7,
        title: 'Place',
        author: {
          name: 'Mr. Fish'
        }
      }, {
        id: 8,
        title: 'Phantom Cemetery',
        author: {
          name: 'John Appleseed'
        }
      }, {
        id: 9,
        title: 'Touch',
        author: {
          name: 'Cook Oreo'
        }
      }].sort(() => 0.5 - Math.random())
      state.horror = shuffledBooks.slice(0, 3)
    }
  }
})

export default store
