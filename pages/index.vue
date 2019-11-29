<template>
  <v-row>
    <app-post
      v-for="post of 3"
      :key="post"
    />
  </v-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  head: { title: 'Главная' },
  components: { AppPost }
}
</script>

<style lang="scss" scoped>
.row {
  margin-top: -12px;
}
</style>
