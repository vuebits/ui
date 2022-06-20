<template>
  <div
    class="rounding"
  >
    <div class="is-rounded">
      is-rounded
    </div>
    <div class="is-rounded-lg">
      is-rounded-lg
    </div>
    <div class="is-round">
      is-round
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonClassesRounding'
};
</script>

<style>
.rounding > div {
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 5px 1px #ccc;
}
</style>
