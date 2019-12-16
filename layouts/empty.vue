<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1185px;
}
.empty-layout1 {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}
</style>
