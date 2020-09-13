<template>
  <div>
    <h1>这是 App 根组件</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>


// scoped 使每个组件的style私有
<style scoped>
h1 {
  color: red;
}
</style>