<template>
  <btn class="theme-button" @click="handleClick">
    Tweak to
    <img v-if="darkModeEnabled" height="15" src="@/assets/images/sun.png" alt="light"/>
    <img v-if="!darkModeEnabled" height="15" src="@/assets/images/moon.png" alt="dark"/>
  </btn>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Btn from '@/components/Btn.vue';

@Component({
  components: {
    Btn,
  },
})
export default class ThemeButton extends Vue {
  mediaQueryList!: MediaQueryList;

  darkModeEnabled = localStorage.getItem('theme') === 'dark';

  handleClick() {
    const newTheme = this.darkModeEnabled ? 'light' : 'dark';
    this.darkModeEnabled = !this.darkModeEnabled;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
}

</script>

<style scoped>
  .theme-button {
    margin-right: 8px;
  }

  .theme-button > img {
    vertical-align: middle;
  }
</style>
