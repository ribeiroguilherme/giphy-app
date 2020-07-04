<template functional>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Button extends Vue {}

</script>

<style scoped>
  .button {
    position: relative;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
  }
  .button:hover {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }
</style>
