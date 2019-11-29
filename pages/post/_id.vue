<template>
  <article>
    <v-img
      src="https://picsum.photos/id/11/500/300"
      lazy-src="https://picsum.photos/id/11/10/6"
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
              Jonathan Lee
            </h1>
            <div class="body-2">
              <v-icon
                small
                dark
              >
                mdi-clock-outline
              </v-icon>
              <span class="mr-2">
                {{ new Date().toLocaleString() }}
              </span>
              <v-icon
                small
                dark
              >
                mdi-comment-multiple-outline
              </v-icon>
              <span class="mr-2">45</span>
              <v-icon
                small
                dark
                class="mr-1"
              >
                mdi-eye-outline
              </v-icon>
              <span>999</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur deserunt architecto ipsam, non ea hic pariatur omnis inventore explicabo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur deserunt architecto ipsam, non ea hic pariatur omnis inventore explicabo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur deserunt architecto ipsam, non ea hic pariatur omnis inventore explicabo!
      </p>
    </main>
    <app-comment-form />
    <div
      v-if="true"
      class="comments"
    >
      <app-comment
        v-for="comment of 3"
        :key="comment"
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
  data () {
    return {
    }
  },
  validate ({ params }) { return Boolean(params.id) },
  methods: {
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
