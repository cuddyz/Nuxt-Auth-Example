<template>
  <main>
    <h1>Profile</h1>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  name: 'ProfilePage',
  methods: {
    async logout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
