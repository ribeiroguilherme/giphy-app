<template>
  <picture>
    <img
      :src="gif.images.downsized.url"
      :alt="gif.slug"
      :width="gif.images.downsized.width"
      :height="gif.images.downsized.height"
    />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IGifItem from '../models/IGifItem';

@Component
export default class GifItem extends Vue {
  @Prop() readonly gif!: IGifItem;
}

</script>
