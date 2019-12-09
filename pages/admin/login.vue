<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-form
          ref="form"
          v-model="valid"
          @submit.native.prevent="onSubmit"
        >
          <v-card class="elevation-12">

            <v-toolbar
              color="primary"
              flat
            >
              <v-toolbar-title>Войти в панель управления</v-toolbar-title>
            </v-toolbar>

            <v-card-text>

              <v-text-field
                v-model.trim="login"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :rules="loginRules"
                :counter="20"
                requred
              />
              <v-text-field
                v-model.trim="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                :counter="20"
                requred
              />

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                :disabled="!valid"
                :loading="loading"
                type="submit"
                class="brown--text"
              >Войти</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    loading: false,
    valid: true,
    login: '',
    password: '',
    loginRules: [
      v => !!v.trim() || 'Логин обязателен',
      v => (v.trim().length >= 3 && v.trim().length <= 20) || 'Логин не менее 3 и не более 30 символов'
    ],
    passwordRules: [
      v => !!v.trim() || 'Пароль обязателен',
      v => (v.trim().length >= 6 && v.trim().length <= 20) || 'Пароль не менее 6 и не более 20 символов'
    ]
  }),
  mounted() {
    const {message} = this.$route.query

    switch(message) {
      case 'session':
        this.$toast.show('Время сессии истекло. Зайдите заново.')
        break
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        const formData = {
          login: this.login,
          password: this.password,
        }

        this.$store.dispatch('auth/login', formData)
          .then(res => {
            console.log('res', res)
            this.$router.push('/admin')
          })
          .catch(e => {
            this.loading = false
            //this.$emit('snackbar', {'error':e})
            console.log('e', e)
            throw e
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
