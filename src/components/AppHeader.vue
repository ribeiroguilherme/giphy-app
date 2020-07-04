<template>
  <header class="header">
    <h1 class="logo">Giphy Clone</h1>
    <app-button class="login">Login</app-button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AppButton from '@/components/AppButton.vue';

@Component({ components: { AppButton } })
export default class AppHeader extends Vue {}

</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
  }

  .logo {
    flex-grow: 1;
  }
</style>
