<template>
  <main>
    <form @submit.prevent>
      <h1 class="mb-1">Login</h1>
      <input v-model="account.email" id="nuxtfire-email" type="email" placeholder="Email Address" />
      <input v-model="account.password" id="nuxtfire-password" type="password" placeholder="Password" />
      <button @click="login()" type="submit">Submit</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      account: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('users/login', this.account)
        .then(() => {
          this.$router.push('/profile')
        })
        .catch(error => {
          this.error = error.code
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  main {
    min-height: 100vh;

    form {
      text-align: center;
      width: 50%;
      margin: 20vh auto 0 auto;

      input {
        margin-bottom: 1rem;
      }
    }
  }
</style>
