<template>
  <div id="tag-form">
    <form @submit.prevent="handleSubmit">
      <label>Tag label</label>
      <input type="text" v-model="tag.label" />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'tag-form',
  data() {
    return {
      tag: {
        label: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('add:tag', this.tag);
    },
  },
};
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>
