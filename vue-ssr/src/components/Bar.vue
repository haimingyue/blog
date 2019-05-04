<template>
  <div class="red" @click="show">
    bar
  </div>
</template>
<script>
export default {
  methods: {
    show() {
      alert(1)
    }
  }
}
</script>

<style sdcped>
  .red {
    background-color: red;
  }
</style>