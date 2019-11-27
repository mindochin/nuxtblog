<template>
  <v-card class="mb-5">
    <v-img
      class="align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    />
    <v-card-title>Top 10 Australian beaches</v-card-title>
    <v-card-subtitle>
      <v-icon small>
        mdi-clock-outline
      </v-icon>
      {{ new Date().toLocaleString() }}
      <span class="mr-2" />
      <v-icon small>
        mdi-comment-multiple-outline
      </v-icon>
      <span class="subheading">45</span>
      <span class="mr-2" />
      <v-icon
        small
        class="mr-1"
      >
        mdi-eye-outline
      </v-icon><span class="subheading">999</span>
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="openPost">
        Открыть
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    openPost () { }
  }
}
</script>

<style lang="scss" scoped>
</style>
