<template>
  <v-sheet color="secondary" class="comment-form">
    <template v-if="!created">
      <v-form
        ref="form"
        v-model="valid"
        @submit.native.prevent="onSubmit"
        class="col-12 offset-md-2 col-md-8 my-5"
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
                v-model.trim="message"
                :rules="messageRules"
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
    <v-snackbar
      v-model="snackbar"
      top
      color="success"
    >
      Комментарий добавлен
      <v-btn
        @click="snackbar = false"
        text
        icon
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    valid: false,
    snackbar: false,
    name: '',
    message: '',
    nameRules: [
      v => !!v.trim() || 'Имя обязательно',
      v => v.trim().length <= 30 || 'Имя не более 30 символов'
    ],
    messageRules: [
      v => !!v.trim() || 'Комментарий обязателен',
      v => v.trim().length <= 1000 || 'Комментарий не более 1000 символов'
    ]
  }),
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        // eslint-disable-next-line no-unused-vars
        const formData = {
          name: this.name,
          message: this.message,
          postId: ''
        }

        try {
          setTimeout(() => {
            this.snackbar = true
            // this.$emit('commentCreated')})
          }, 2000)
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>
