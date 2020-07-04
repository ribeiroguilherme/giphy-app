<template>
  <router-link :to="{ path: `/categories/${name}`}" class="category-item">
    <img class="image" :src="imageUrl" :alt="name"/>
    <div class="name">{{name}}</div>
  </router-link>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({ name: 'category-item' })
export default class CategoryItem extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string;

  @Prop({ required: true, type: String }) readonly imageUrl!: string;
}

</script>

<style scoped>
  .category-item {
    display: block;
    position: relative;
    width: 248px;
    height: 134px;
    margin: 0px 16px 16px 0px;
    cursor: pointer;
  }

  .category-item:nth-child(3) {
    margin-right: 0;
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  img {
    width: 248px;
    height: 134px;
    object-fit: cover;
  }
</style>
