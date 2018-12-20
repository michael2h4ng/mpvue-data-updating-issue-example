<template>
  <div>
    <div class="horror">
      <book v-for="(b, i) in horrorBooks" :title="b.title" :author="b.author" :key="i"></book>
    </div>
    <p>
      <button @click="shuffleHorrorBooks">Shuffle Horror Books</button>
    </p>
    <div class="fantasy">
      <book v-for="(b, i) in fantasyBooks" :title="b.title" :author="b.author" :key="i"></book>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import Author from '../../components/author'
import Book from '../../components/book'

export default {
  computed: {
    horrorBooks () {
      return store.state.horror
    },
    fantasyBooks () {
      return store.state.fantasy
    }
  },
  components: {
    Author,
    Book
  },
  methods: {
    shuffleHorrorBooks () {
      store.commit('shuffleHorrorBooks')
    }
  }
}
</script>

<style>

</style>
