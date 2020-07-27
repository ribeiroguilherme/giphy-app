<template>
  <btn @click="handleClick">Logout</btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Mutation, namespace } from 'vuex-class';
import Component from 'vue-class-component';
import Btn from '@/components/Btn.vue';

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
