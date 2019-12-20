<template>
  <v-row>
    <app-post
      v-for="post of posts"
      :key="post._id"
      :post="post"
    />
  </v-row>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  components: { AppPost },
  async asyncData ({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  },
  head: { title: 'Главная' }
}
</script>

<style lang="scss" scoped>
.row {
  margin-top: -12px;
}
</style>
