<template>
  <category-list :category="category"/>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import CategoryList from '@/components/CategoryList.vue';

@Component({
  components: {
    CategoryList,
  },
})
export default class CategoryPage extends Vue {
  @Prop() readonly category!: string | undefined;

  // eslint-disable-next-line class-methods-use-this
  beforeRouteUpdate(to: any, from: any, next: any) {
    console.log('beforeRouteUpdate');
    next();
  }
}
</script>
