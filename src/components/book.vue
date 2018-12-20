<template>
  <div class="book">
    <p>
      {{title}}
    </p>
    <author :author="author"></author>
  </div>
</template>

<script>
import author from './author'
export default {
  props: {
    title: String,
    author: Object
  },
  components: {
    author
  },
  mounted () {
    console.log('book mounted', this.title)
  }
}
</script>

<style>
.book {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
