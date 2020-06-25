<template>
  <div class="tag-list">
    <p v-if="tags.length === 0" class="empty-message">
      No tags
    </p>
    <nav>
      <ul>

        <li v-for="tag in tags" :key="tag.id">

          <span v-if="editing === tag.id">
            <input type="text" v-model="tag.label" />
          </span>
          <span v-else>
            <a>{{tag.label}}</a>
          </span>

          <span v-if="editing === tag.id">
            <button @click="editTag(tag)">Save</button>
            <button @click="cancelEdit(tag)">Cancel</button>
          </span>
          <span v-else>
            <button @click="editMode(tag)"> Edit </button>
            <button @click="$emit('delete:tag', tag.id)"> Delete </button>
          </span>
        </li>
      </ul>

    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'tag-list',
  data() {
    return {
      editing: -1,
      cachedTag: null,
    };
  },
  props: {
    tags: Array,
  },
  methods: {
    editMode(tag: any) {
      this.editing = tag.id;
      this.cachedTag = { ...tag };
    },

    editTag(tag: any) {
      debugger;
      if (tag.label === '') return;
      this.$emit('edit:tag', tag.id, tag);
      this.editing = -1;
    },

    cancelEdit(tag: any) {
      Object.assign(tag, this.cachedTag);
      this.editing = -1;
    },
  },
});

</script>

<style scoped>

</style>
