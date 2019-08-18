<template>
    <section>

      <form @submit.prevent="login()">
        <h1>Login page</h1>
        <div class="form-group">
          <input v-model="username" type="text" class="form-control" name="username" placeholder="Enter username">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" name="password" placeholder="Enter password">
        </div>

        <p>
          <nuxt-link to="/">To home page</nuxt-link>
        </p>

        <button class="btn btn-primary" type="submit">Login</button>
      </form>
    </section>
</template>

<script>
    export default {
        name: "login",
        layout: 'empty',

        data() {
            return {
                username: '',
                password: ''
            }
        },

        methods: {
            login() {
                this.$auth.loginWith('local', {
                    data: {
                        username: this.username,
                        password: this.password
                    }
                })
            }
        }
    }
</script>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>
