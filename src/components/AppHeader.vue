<template>
  <header class="header">
    <h1 class="logo">Giphy Clone</h1>
    <login-button v-if="!isUserAuthenticated" class="login">Login</login-button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { LoginButton } from '@/components';
import { Getter } from 'vuex-class';

@Component({ components: { LoginButton } })
export default class AppHeader extends Vue {
  @Getter isUserAuthenticated!: boolean;
}

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
