<template>
  <header class="header">
    <h1 class="logo">Giphy Clone</h1>
    <login-button v-if="!isUserLoggedIn" class="login">Login</login-button>
    <logout-button v-else />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { LoginButton, LogoutButton } from '@/components';
import { Getter } from 'vuex-class';

@Component({ components: { LoginButton, LogoutButton } })
export default class AppHeader extends Vue {
  @Getter isUserLoggedIn!: boolean;
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
