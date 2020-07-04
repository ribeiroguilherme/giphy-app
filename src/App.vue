<template>
  <page-layout>
    <router-view></router-view>
  </page-layout>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import GiphyService, { IGiphyService } from '@/services/GiphyService';
import PageLayout from '@/pages/PageLayout.vue';

@Component({
  components: {
    PageLayout,
  },
})
export default class App extends Vue {
  @Provide() giphyService: IGiphyService = new GiphyService(process.env.VUE_APP_GIPHY_KEY);
}
</script>

<style>
body {
  margin: 0px auto;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', sans-serif;
  max-width: 800px;
}
</style>
