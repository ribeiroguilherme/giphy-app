<template>
  <div class="category-list">
    <category-item
      v-for="cat in categories"
      :key="cat.name"
      :name="cat.name"
      :imageUrl="cat.gif.images.fixed_width.url"
      :isSubcategory="category !== undefined"
    />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Inject, Prop, Watch,
} from 'vue-property-decorator';
import ICategory from '@/models/ICategory';
import { IGiphyService } from '@/services/GiphyService';
import CategoryItem from '@/components/CategoryItem.vue';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card,
    CategoryItem,
  },
})
export default class CategoryMenuItem extends Vue {
  @Inject() readonly giphyService!: IGiphyService;

  @Prop() readonly category?: string;

  categories: ICategory[] = [];

  created() {
    this.requestCategories();
  }

  @Watch('category')
  onCategoryChanges(newCategory: string, oldCategory: string) {
    if (newCategory === oldCategory) return;
    this.requestCategories();
  }

  async requestCategories() {
    const categories = await this.giphyService.fetchCategories(this.category);
    this.categories = categories;
  }
}
</script>

<style scoped>
  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
