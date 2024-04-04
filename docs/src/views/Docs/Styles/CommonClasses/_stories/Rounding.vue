<template>
  <div class="rounding">
    <div class="is-rounded">is-rounded</div>
    <div class="is-rounded-lg">is-rounded-lg</div>
    <div class="is-round">is-round</div>
  </div>
</template>

<script>
export default {
  name: 'CommonClassesRounding',
}
</script>

<style>
.rounding > div {
  height: 4rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 2px 5px 1px #ccc;
}
</style>
