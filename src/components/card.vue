<template>
  <div>
    <p class="card">
      {{text}}
    </p>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        default: "000",
        type: Boolean
      }
    }
  };
</script>

<style>
</style>
