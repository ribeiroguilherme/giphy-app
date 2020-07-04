<template>
  <category-list :category="subcategory"/>
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
  @Prop() readonly subcategory: string | undefined;

  // // eslint-disable-next-line class-methods-use-this
  // beforeRouteUpdate(to: any, from: any, next: any) {
  //   // console.log('dynamic param', this.subcategory);
  //   // console.log(to, from);
  //   next();
  // }
}
</script>
