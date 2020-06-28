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
  Component, Vue, Inject,
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

<style scoped>
  .category-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
