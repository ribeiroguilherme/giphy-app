<template>
  <div id="tag-form">
    <form @submit.prevent="handleSubmit">
      <label>Tag label</label>
      <input
        type="text"
        ref="first"
        :class="{'has-error': submitting && invalidName }"
        v-model="tag.label"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Employee successfully added
      </p>
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'tag-form',
  data() {
    return {
      submitting: false,
      success: false,
      error: false,
      tag: {
        label: '',
      },
    };
  },
  computed: {
    invalidLabel() {
      return this.tag.label === '';
    },
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidLabel) {
        this.error = true;
        return;
      }

      this.$emit('add:tag', this.tag);

      this.$refs.first.focus();

      this.tag = {
        label: '',
      };

      this.error = false;
      this.success = true;
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  button {
    display: block;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>
