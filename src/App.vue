<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import GiphyService, { IGiphyService } from '@/services/GiphyService';
import CategoryList from '@/components/CategoryList.vue';

@Component({
  components: {
    CategoryList,
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
  background-color: black;
  color: white;
}
</style>
