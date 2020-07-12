<template>
  <btn
    :disabled="isUserLoggingIn"
    @click="handleClick"
  >
    Logout
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Btn } from '@/components';
import { Mutation } from 'vuex-class';
import Component from 'vue-class-component';

@Component({
  components: {
    Btn,
  },
})
export default class LoginButton extends Vue {
  @Mutation logout: any;

  handleClick(event: Event) {
    this.logout();
  }
}

</script>
