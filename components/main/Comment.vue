<template>
  <v-card class="mb-5">
    <v-card-title class="brown lighten-5">
      <v-avatar size="36" color="primary" class="mr-2">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <span class="subtitle-1 mr-3">Twitter</span>
      <v-spacer />
      <v-icon
        small
        class="mr-1"
      >
        mdi-clock-outline
      </v-icon>
      <span class="body-2 font-weight-light">
        {{ new Date().toLocaleString() }}
      </span>
    </v-card-title>
    <v-card-text>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, pariatur!
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>
