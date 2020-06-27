<template>
  <div class="category-list">
    <div v-for="category in categories" :key="category.name">
      <p>{{category.gif.title}}</p>
      <img v-bind:src="category.gif.images.original.url" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Inject,
} from 'vue-property-decorator';
import { IGiphyService } from '../services/GiphyService';
import ICategory from '../models/ICategory';

@Component({
  name: 'category-list',
})
export default class CategoryMenuItem extends Vue {
  @Inject() readonly giphyService!: IGiphyService;

  // eslint-disable-next-line max-len
  // Since Vue doesn’t allow dynamically adding root-level reactive properties, you have to initialize Vue instances by declaring all root-level reactive data properties upfront, even with an empty value:
  categories: ICategory[] = [];

  created() {
    this.requestCategories();
  }

  async requestCategories() {
    const categories = await this.giphyService.fetchCategories();
    this.categories = categories;
    console.log(categories);
  }
}
</script>
