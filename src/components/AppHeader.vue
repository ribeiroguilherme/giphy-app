<template>
  <header class="header">
    <h1 class="logo">Giphy Clone</h1>

    <a v-if="gifs.starredGifs.length > 0" href="/my-gifs"> My Starred Gifs </a>

    <login-button v-if="!isUserLoggedIn" class="login">Login</login-button>
    <logout-button v-else />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { LoginButton, LogoutButton } from '@/components';
import { State, Getter, namespace } from 'vuex-class';
import { IGifsState } from '../store/types';

const AccountGetter = namespace('account', Getter);

@Component({ components: { LoginButton, LogoutButton } })
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
  }
</style>
