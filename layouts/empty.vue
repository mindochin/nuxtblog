<template>
  <v-app>
    <v-content>
      <div class="empty-layout">
        <nuxt />
      </div>
    </v-content>
    <v-snackbar
      v-model="snackbar"
      top
      :color="color"
    >
      {{message}}
      <v-btn
        @click="snackbar = false"
        text
        icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    color: '',
    message: ''
  }),
  beforeCreated: function () {
    this.$vuetify.theme.dark = false
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (value) {
      this.message = value
      this.color = 'error'
      this.snackbar = true

    }
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
