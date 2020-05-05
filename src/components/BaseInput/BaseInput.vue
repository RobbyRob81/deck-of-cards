<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "base-input",
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: ""
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
