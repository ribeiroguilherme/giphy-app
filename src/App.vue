<template>
  <div id="app">
    <tag-form @add:tag="addTag" />
    <tag-list :tags="tags"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Tag from '@/components/Tag.vue';
import TagList from '@/components/TagList.vue';
import TagForm from '@/components/TagForm.vue';

@Component({
  components: {
    Tag,
    TagList,
    TagForm,
  },
})
export default class App extends Vue {
  tags = [
    { id: 1, label: 'Action' },
    { id: 2, label: 'Fun' },
  ];

  addTag(tag: any) {
    const lastId = this.tags.length > 0
      ? this.tags[this.tags.length - 1].id
      : 0;
    const id = lastId + 1;
    const newTag = { label: tag.label, id };

    this.tags = [...this.tags, newTag];
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin: 60px;
}
</style>
