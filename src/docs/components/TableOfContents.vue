
<template>
  <div :class="$bem({})">
    <h3 :class="$bem({e: 'header'})">
      Table of contents
    </h3>
    <ul :class="$bem({e: 'list'})">
      <li
        v-for="route in routes"
        :key="route.name"
        :class="$bem({e: 'list-item'})"
      >
        <router-link
          :to="getRoute(route.name)"
        >
          {{ route.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    routes: {
      type: Array,
      required: true
    },
    group: {
      type: String,
      required: true
    }
  },
  methods: {
    getRoute (name) {
      return {
        name: `${this.group}${name}`
      };
    }
  }
};
</script>

<style lang="scss">
.table-of-contents {
  margin-bottom: 4 * $sp;

  &__header {
    margin-bottom: 2 * $sp;
  }

  &__list-item {
    cursor: pointer;
    padding: $sp 2 * $sp;
    color: $color-text-2;

    &:hover {
      font-weight: bold;
    color: $color-text;
    }
  }
}
</style>
