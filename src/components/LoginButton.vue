<template>
  <btn @click="handleClick">Login</btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Btn } from '@/components';
import { Mutation } from 'vuex-class';
import Component from 'vue-class-component';
import { IUser } from '../store/types';

@Component({
  components: {
    Btn,
  },
})
export default class LoginButton extends Vue {
  @Mutation setAuthenticatedUser: any;

  // eslint-disable-next-line class-methods-use-this
  handleClick(event: Event) {
    const user: IUser = { name: 'Guilherme', isAuthenticated: true };
    this.setAuthenticatedUser(user);
  }
}

</script>
