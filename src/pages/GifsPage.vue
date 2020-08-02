<template>
  <div>
    <router-link to="/categories" class="categories-link">← Back to Categories</router-link>
    <div class="gifs-section">
      <gif-item
        v-for="gif in gifs"
        :key="gif.slug"
        :gif="gif"
      />
    </div>

  </div>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
/* eslint-disable class-methods-use-this */
import Vue from 'vue';
import {
  Component, Prop, Inject, Watch,
} from 'vue-property-decorator';
import { IGiphyService } from '@/services/GiphyService';
import GifItem from '@/components/GifItem.vue';
import IGifItem from '@/models/IGifItem';

@Component({
  components: {
    GifItem,
  },
})
export default class GifsPage extends Vue {
    @Inject() readonly giphyService!: IGiphyService;

    @Prop() readonly searchTerm!: string;

    gifs: IGifItem[] = [];

    created() {
      this.searchGifsAsync();
    }

    @Watch('searchTerm')
    onSearchChanges(newSearch: string, oldSearch: string) {
      if (newSearch === oldSearch) return;
      this.searchGifsAsync();
    }

    async searchGifsAsync() {
      const { searchTerm } = this;
      this.gifs = await this.giphyService.searchGifs(searchTerm);
      console.log(this.gifs);
    }
}

</script>

<style scoped>
  .categories-link {
    display: inline-block;
    margin-bottom: 12px;
  }

  .gifs-section {
    background-color: red;
  }
</style>
