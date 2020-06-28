<template>
  <div class="category-list">
    <category-item
      v-for="category in categories"
      :key="category.name"
      :name="category.name"
      :imageUrl="category.gif.images.fixed_width.url"
    />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Inject, Prop,
} from 'vue-property-decorator';
import ICategory from '@/models/ICategory';
import { IGiphyService } from '@/services/GiphyService';
import CategoryItem from '@/components/CategoryItem.vue';

@Component({
  name: 'category-list',
  components: {
    CategoryItem,
  },
})
export default class CategoryMenuItem extends Vue {
  @Inject() readonly giphyService!: IGiphyService;

  @Prop() readonly category!: string | undefined;

  categories: ICategory[] = [];

  created() {
    console.log(this.category);
    this.requestCategories();
  }

  // eslint-disable-next-line class-methods-use-this
  beforeRouteUpdate(to: any, from: any, next: any) {
    console.log(to, from, next);
  }

  async requestCategories() {
    const categories = await this.giphyService.fetchCategories();
    this.categories = categories;
    console.log(categories);
  }
}
</script>

<style scoped>
  .category-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
