<template>
  <v-sheet
    color="secondary"
    class="comment-form"
  >
    <template v-if="!isCreated">
      <v-form
        ref="form"
        v-model="valid"
        class="col-12 offset-md-2 col-md-8 my-5"
        @submit.native.prevent="onSubmit"
      >
        <p class="overline text-center">
          Добавить комментарий
        </p>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.trim="name"
                :rules="nameRules"
                :counter="30"
                label="Ваше имя"
                required
                outlined
                filled
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model.trim="text"
                :rules="textRules"
                :counter="1000"
                label="Ваш комментарий"
                required
                outlined
                filled
                rows="3"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                :disabled="!valid"
                :loading="loading"
                class="m-4"
                type="submit"
              >
                Отправить
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>
  </v-sheet>
</template>

<script>
export default {
  props: {
    postId: { type: String, required: true }
  },
  data: () => ({
    loading: false,
    valid: false,
    snackbar: false,
    name: '',
    text: '',
    isCreated: false,
    nameRules: [
      v => !!v.trim() || 'Имя обязательно',
      v => v.trim().length <= 30 || 'Имя не более 30 символов'
    ],
    textRules: [
      v => !!v.trim() || 'Комментарий обязателен',
      v => v.trim().length <= 1000 || 'Комментарий не более 1000 символов'
    ]
  }),
  methods: {
    async onSubmit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        // eslint-disable-next-line no-unused-vars
        const formData = {
          name: this.name,
          text: this.text,
          postId: this.postId
        }

        try {
          const newComment = await this.$store.dispatch('comment/create', formData)
          console.log(newComment)
          this.isCreated = true
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>
