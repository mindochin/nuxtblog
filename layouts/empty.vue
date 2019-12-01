<template>
  <v-app>
    <v-content>

      <nuxt />

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
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    color: '',
    message: ''
  }),
  created: function () {
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
