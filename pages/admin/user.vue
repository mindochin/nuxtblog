<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Добавить пользователя</h1>
      </v-col>
    </v-row>
    <v-row>
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

          <v-btn
            color="primary"
            :disabled="!valid"
            :loading="loading"
            type="submit"
            class="brown--text"
          >
            Создать
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
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

        this.$store.dispatch('auth/createUser', formData)
          .then(res => {
            //this.$emit('sendMessage', {'type':'success', 'text':'Пользователь создан'})
            this.$toast.success('Пользователь создан')
            this.$refs.form.reset
            this.loading = false
          })
          .catch(e => {
            this.loading = false
            //this.$emit('snackbar', {'error':e})
            //console.log('e', e)
            //throw e
          })
      }
    }
  }
}
</script>
