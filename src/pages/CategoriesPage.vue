<template>
  <category-list :category="subcategory"/>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { CategoryList } from '@/components';

@Component({
  components: {
    CategoryList,
  },
})
export default class CategoryPage extends Vue {
  @Prop() readonly subcategory: string | undefined;
}
</script>
