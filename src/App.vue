<template>
  <div id="app">
    <category-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

import GiphyService, { IGiphyService } from '@/services/GiphyService';

import CategoryList from '@/components/CategoryList.vue';

type Tag = {
  id: number;
  label: string;
}

@Component({
  components: {
    CategoryList,
  },
})
export default class App extends Vue {
  @Provide() giphyService: IGiphyService = new GiphyService(process.env.VUE_APP_GIPHY_KEY);

  tags: Tag[] = [];

  mounted() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.tags = data.map((user: any) => ({ id: user.id, label: user.username }));
    } catch (error) {
      console.error(error);
    }
  }

  addTag(tag: Tag) {
    const lastId = this.tags.length > 0
      ? this.tags[this.tags.length - 1].id
      : 0;
    const id = lastId + 1;
    const newTag = { label: tag.label, id };

    this.tags = [...this.tags, newTag];
  }

  deleteTag(id: number) {
    this.tags = this.tags.filter((tag) => tag.id !== id);
  }

  editTag(id: number, updatedTag: Tag) {
    this.tags = this.tags.map((tag) => (tag.id === id ? updatedTag : tag));
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin: 60px;
}
</style>
