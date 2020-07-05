<template>
  <btn
    :disabled="isUserLoggingIn"
    @click="handleClick"
  >
    Login
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Btn } from '@/components';
import { Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import { ILoginForm } from '@/models/ILogin';

@Component({
  components: {
    Btn,
  },
})
export default class LoginButton extends Vue {
  @Action loginAsync: any;

  @Getter isUserLoggingIn!: boolean;

  handleClick(event: Event) {
    const credentials: ILoginForm = {
      email: 'guilhermemrr@gmail.com',
      password: 'learning-vue',
    };
    this.loginAsync(credentials);
  }
}

</script>
