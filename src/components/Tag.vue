<template>
  <div class="tag">
    <div class="tag-label">
      {{ tag.label }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'tag',
  props: ['tag'],
});
</script>

<style scoped>
.tag {
  padding: 0px;
  height: 32px;
  background-color: #606060;
  color: #ffffff;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
}

.tag:hover {
  background-color: #737171;

}

.tag-label {
  padding-left: 12px;
  padding-right: 12px;
}

</style>
