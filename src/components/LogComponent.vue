<template>
  <div>
    <p id="paragraph">Log:</p>
    <ul>
      <li v-for="entry in log" v-bind:key="entry">{{ entry }}</li>
    </ul>
  </div>
</template>

<script>
import '../styles.css'
export default {
  props: ['log']
}
</script>

<style>
</style>