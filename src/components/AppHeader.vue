<template>
  <header class="header">
    <h1 class="logo">Giphy Clone</h1>

    <a v-if="gifs.starredGifs.length > 0" href="/my-gifs"> My Starred Gifs </a>

    <theme-button />

    <login-button v-if="!isUserLoggedIn" class="login">Login</login-button>
    <logout-button v-else />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { LoginButton, LogoutButton, ThemeButton } from '@/components';
import { State, Getter, namespace } from 'vuex-class';
import { IGifsState } from '../store/types';

const AccountGetter = namespace('account', Getter);

@Component({ components: { LoginButton, LogoutButton, ThemeButton } })
export default class AppHeader extends Vue {
  @AccountGetter isUserLoggedIn!: boolean;

  @State gifs!: IGifsState;
}

</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
  }

  .logo {
    flex-grow: 1;
    color: var(--text-color)
  }
</style>
