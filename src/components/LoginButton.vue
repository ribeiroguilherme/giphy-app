<template>
  <btn
    :disabled="isUserLoggingIn"
    @click="handleClick"
  >
    <loader v-show="isUserLoggingIn" class="button-loader" />
    <span :class="{'button--hidden': isUserLoggingIn}"> Login </span>
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action, Getter, namespace } from 'vuex-class';
import Component from 'vue-class-component';
import { ILoginForm } from '@/models/ILogin';
import Btn from '@/components/Btn.vue';
import Loader from '@/components/Loader.vue';

const AccountAction = namespace('account', Action);
const AccountGetter = namespace('account', Getter);

@Component({ components: { Btn, Loader } })
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

<style scoped>
  .button--hidden {
    visibility: hidden;
  }

  .button-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
