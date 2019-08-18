<template>
    <section>
      <h1>Users page</h1>

      <ul>
        <li v-for="user in users" :key="user.id">
          <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: "usersIndex",

        async fetch({store}) {
          if (store.getters['users/users'].length === 0) {
              await store.dispatch('users/fetch')
          }
        },

        computed: {
            users() {
                return this.$store.getters['users/users']
            }
        },

        methods: {
            openUser(user) {
                this.$router.push('/users/' + user.id)
            }
        }
    }
</script>

<style scoped>

</style>
