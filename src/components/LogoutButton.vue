<template>
  <btn @click="handleClick">Logout</btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Btn } from '@/components';
import { Mutation, namespace } from 'vuex-class';
import Component from 'vue-class-component';

const AccountMutation = namespace('account', Mutation);

@Component({
  components: {
    Btn,
  },
})
export default class LoginButton extends Vue {
  @AccountMutation logout: any;

  handleClick(event: Event) {
    this.logout();
  }
}

</script>
