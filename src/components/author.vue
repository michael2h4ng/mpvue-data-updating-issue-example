<template>
  <div>
    <p class="author">
      {{author.name}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: Object
  }
}
</script>

<style>
.author {
  padding: 10px;
}
</style>
