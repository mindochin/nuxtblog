<template>
  <v-card class="mb-5">
    <v-card-title class="brown lighten-5">
      <v-avatar
        size="36"
        class="mr-2"
      >
        <v-icon large color="brown lighten-4">
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <span class="subtitle-1 mr-3">{{ comment.name }}</span>
      <v-spacer />
      <v-icon
        small
        class="mr-1"
      >
        mdi-clock-outline
      </v-icon>
      <span class="body-2 font-weight-light">
        {{ new Date(comment.date).toLocaleString() }}
      </span>
    </v-card-title>
    <v-card-text>
      {{ comment.text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
