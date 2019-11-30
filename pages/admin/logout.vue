<template>
  <div>logout</div>
</template>

<script>
export default {
  layout: 'admin',
  beforeCreate () {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login')
  }
}
</script>
