<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.native.prevent="onSubmit"
    class="col-12 offset-md-2 col-md-8 my-5 brown lighten-5"
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

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    message: '',
    nameRules: [
      v => !!v || 'Имя обязательно',
      v => v.length <= 30 || 'Имя не более 30 символов'
    ],
    messageRules: [
      v => !!v || 'Name is required',
      v => v.length <= 1000 || 'Комментарий не более 1000 символов'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>
