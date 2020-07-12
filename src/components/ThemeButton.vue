<template>
  <btn class="theme-button" @click="handleClick">
    Tweak theme
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Getter, Mutation } from 'vuex-class';
import Component from 'vue-class-component';
import { Btn } from '@/components';

@Component({
  components: {
    Btn,
  },
})
export default class ThemeButton extends Vue {
  @Mutation toggleTheme: any;

  @Getter darkModeEnabled!: boolean;

  handleClick(event: Event) {
    this.toggleTheme();
  }
}

</script>

<style scoped>
  .theme-button {
    margin-right: 8px;
  }
</style>
