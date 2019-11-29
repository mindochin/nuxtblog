<template>
  <v-app>
    <v-content>
      <div class="empty-layout">
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  created: function () {
    this.$vuetify.theme.dark = false
  }
}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}
</style>
