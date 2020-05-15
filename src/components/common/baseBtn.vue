<template>
  <button
    :disabled="disabled"
    class="button"
    :class="{ active: active }"
    v-bind="$attrs"
    v-on="$listeners"
    @click="$emit('click')"
  >
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    active: Boolean,
    disabled: Boolean
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: $black-color;
  color: $white-color;
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 4px;
  outline: none;
  border: none;
  transition: background-color $transition-time;
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    background: $grey-color;
  }
  &.active {
    background: $grey-light-color;
  }
}
</style>
