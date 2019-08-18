<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt SSR</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" exact active-class="active" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" active-class="active"  to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" active-class="active"  to="/users">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout()">logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout()
        }
    }
}
</script>

<style>

</style>
