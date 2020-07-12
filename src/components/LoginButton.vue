<template>
  <btn
    :disabled="isUserLoggingIn"
    @click="handleClick"
  >
    <i v-show="isUserLoggingIn" class="fa fa-spinner fa-pulse"></i>
    {{isUserLoggingIn ? 'Logging in' : 'Login' }}
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Btn } from '@/components';
import { Action, Getter, namespace } from 'vuex-class';
import Component from 'vue-class-component';
import { ILoginForm } from '@/models/ILogin';

const AccountAction = namespace('account', Action);
const AccountGetter = namespace('account', Getter);

@Component({
  components: {
    Btn,
  },
})
export default class LoginButton extends Vue {
  @AccountAction loginAsync: any;

  @AccountGetter isUserLoggingIn!: boolean;

  handleClick(event: Event) {
    const credentials: ILoginForm = {
      email: 'guilhermemrr@gmail.com',
      password: 'learning-vue',
    };
    this.loginAsync(credentials);
  }
}

</script>
