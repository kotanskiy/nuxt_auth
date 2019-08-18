<template>
  <div>
    <navbar/>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
  import navbar from "@/components/navbar";

  export default {
      components: {
          navbar
      }
  }
</script>

<style>

</style>

