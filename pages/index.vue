<template>
  <main>
    <form @submit.prevent>
      <h1 class="mb-1">Login</h1>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Home'
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
