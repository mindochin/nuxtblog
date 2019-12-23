<template>
  <article>
    <v-img
      :src="post.imageUrl"
      :lazy-src="post.imageUrl"
      aspect-ratio="1"
      class="grey lighten-2 mb-5"
      max-height="300"
      max-width="900"
    >
      <v-row
        align="center"
        class="lightbox white--text pa-2 fill-height"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <div class="post-header">
            <h1>
              {{ post.title }}
            </h1>
            <div class="body-2">
              <v-icon
                small
                dark
              >
                mdi-clock-outline
              </v-icon>
              <span class="mr-2">
                {{ new Date(post.date).toLocaleString() }}
              </span>
              <v-icon
                small
                dark
              >
                mdi-comment-multiple-outline
              </v-icon>
              <span class="mr-2">{{ post.comments.length }}</span>
              <v-icon
                small
                dark
                class="mr-1"
              >
                mdi-eye-outline
              </v-icon>
              <span>{{ post.views }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <main class="mb-5" v-html="post.detail" />
    <app-comment-form :post-id="post._id" @created="createCommentHandler" />
    <div
      v-if="post.comments.length"
      class="comments"
    >
      <app-comment
        v-for="comment of post.comments"
        :key="comment._id"
        :comment="comment"
      />
    </div>
    <div
      v-else
      class="text-center"
    >
      Комментариев пока нет
    </div>
  </article>
</template>

<script>
import AppCommentForm from '@/components/main/CommentForm'
import AppComment from '@/components/main/Comment'
export default {
  components: { AppComment, AppCommentForm },
  async asyncData ({ store, params }) {
    await store.dispatch('post/addView', params.id)
    const post = await store.dispatch('post/fetchById', params.id)
    return { post }
  },
  validate ({ params }) { return Boolean(params.id) },
  methods: {
    createCommentHandler (comment) {
      this.post.comments.unshift(comment)
    }
  }
}
</script>

<style type="scss" scoped>
.post-header {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 1em;
}
h1 {
  margin-bottom: 0.5em;
}
</style>
