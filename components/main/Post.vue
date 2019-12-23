<template>
  <v-col
    cols="12"
    sm="6"
  >
    <v-card class="mb-5">
      <v-img
        class="align-end"
        height="200px"
        :src="post.imageUrl"
      />
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-subtitle>
        <v-icon small>
          mdi-clock-outline
        </v-icon>
        {{ post.date | date('shortDate') }}
        <span class="mr-2" />
        <v-icon small>
          mdi-comment-multiple-outline
        </v-icon>
        <span class="subheading">{{ post.comments.length }}</span>
        <span class="mr-2" />
        <v-icon
          small
          class="mr-1"
        >
          mdi-eye-outline
        </v-icon><span class="subheading">{{ post.views }}</span>
      </v-card-subtitle>
      <v-card-text class="text--primary" v-html="post.preview" />
      <v-card-actions>
        <v-btn
          :to="`/post/${post._id}`"
          class1="brown--text"
          outlined1
          elevation="1"
        >
          Читать
        </v-btn>
        <v-spacer />
        <v-chip outlined>
          Отдых
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true }
  },
  data () { return { postid: 1 } },
  methods: {
    openPost () {
      const id = this.post._id
      this.$router.push(`post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
