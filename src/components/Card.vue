<template>
  <div class='card'>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Card extends Vue {}

</script>

<style scoped>
  .card {
    position: relative;
    background-color: aquamarine;
  }
  .card:hover {
    box-shadow: 0px 2px 8px 4px rgba(19, 19, 19, 0.23);
  }
</style>
