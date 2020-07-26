<template>
  <btn class="theme-button" @click="handleClick">
    {{ darkModeEnabled ? 'Tweak to light' : 'Tweak to dark'}}
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Mutation } from 'vuex-class';
import Component from 'vue-class-component';
import { Btn } from '@/components';

@Component({
  components: {
    Btn,
  },
})
export default class ThemeButton extends Vue {
  @Mutation toggleTheme: any;

  mediaQueryList!: MediaQueryList;

  darkModeEnabled = true;

  created() {
    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');

    if (this.mediaQueryList.matches) {
      this.darkModeEnabled = false;
    }

    this.mediaQueryList.addEventListener('change', this.handleColorSchemaChange);
  }

  beforeDestroy() {
    console.log('before destroy');
    this.mediaQueryList.removeEventListener('change', this.handleColorSchemaChange);
  }

  handleColorSchemaChange(mediaQueryListEvent: MediaQueryListEvent) {
    console.log(mediaQueryListEvent);

    if (mediaQueryListEvent.matches) {
      this.darkModeEnabled = false;
      return;
    }
    this.darkModeEnabled = true;
  }

  handleClick(event: Event) {
    const newTheme = this.darkModeEnabled ? 'light' : 'dark';
    this.darkModeEnabled = !this.darkModeEnabled;
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}

</script>

<style scoped>
  .theme-button {
    margin-right: 8px;
  }
</style>
