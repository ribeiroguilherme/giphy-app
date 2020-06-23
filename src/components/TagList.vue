<template>
  <div class="tag-list">
    <nav>
      <ul>
        <li v-for="tag in tags" :key="tag.id">
          <a>
            {{tag.label}}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'tag-list',
  props: {
    tags: Array,
  },
});

</script>

<style scoped>

</style>
