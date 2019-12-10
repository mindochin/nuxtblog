<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-form
          ref="form"
          id="article-form"
          v-model="valid"
          @submit.native.prevent="onSubmit"
        >
          <v-card>

            <v-toolbar color="grey darken-4">
              <v-toolbar-title>{{fulltitle}}
                <template v-if="article.date">
                  <v-divider dark />
                  <small>
                    <v-icon
                      small
                      dark
                    >
                      mdi-clock-outline
                    </v-icon>
                    <span class="mr-2">
                      {{ new Date(article.date).toLocaleString() }}
                    </span>
                    <v-icon
                      small
                      dark
                      class="mr-1"
                    >
                      mdi-eye-outline
                    </v-icon>
                    <span class="mr-2">{{article.views}}</span>
                    <v-icon
                      small
                      dark
                    >
                      {{count(article.comments)}}
                    </v-icon>
                    <span>45</span>
                  </small>
                </template>
              </v-toolbar-title>

            </v-toolbar>

            <v-card-text>

              <v-text-field
                v-model.trim="article.title"
                filled
                id="title"
                label="Название"
                name="title"
                type="text"
                :rules="titleRules"
                :counter="120"
                requred
              />
              <v-textarea
                v-model.trim="article.preview"
                filled
                id="preview"
                label="Описание статьи"
                name="preview"
                auto-grow0
                :rules="previewRules"
                :counter="1000"
                requred
              />

              <v-textarea
                v-model.trim="article.detail"
                filled
                auto-grow
                id="detail"
                label="Основной текст"
                name="detail"
                :rules="detailRules"
                :counter="10000"
                requred
              />
              <!-- <tiptap-vuetify
                v-model.trim="controls.previewText"
                :extensions="extensions"
                :toolbar-attributes="{ color: 'grey darken-4' }"
                :card-props="{ filled: true  }"
                :counter="10000"
                requred
                filled
                auto-grow
              /> -->
              <client-only>
                <tinymce-editor
                  v-model.trim="article.preview"
                  :init="{
                    height: 400,
                    plugins: [
                    'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars'
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                    skin_url: '/tinymce/skins/ui/oxide-dark',
                    content_css : '/tinymce/skins/content/dark/content.css',
                    image_advtab: true,
                    autosave_ask_before_unload: true,
                    autosave_interval: '60s',
                    autosave_prefix: '{path}{query}-{id}-',
                    autosave_restore_when_empty: false,
                    autosave_retention: '2m',
                    contextmenu: 'imagetools table',
                    noneditable_noneditable_class: 'mceNonEditable',
                    image_caption: true,
                    image_class_list: [
                      { title: 'None', value: '' },
                      { title: 'Img-responsive', value: 'img-responsive' }
                    ],
                  }"
                />
              </client-only>
              <v-file-input
                class="mt-5"
                filled
                show-size
                accept="image/*"
                counter1
                label="Картинка к статье"
                @change="uploadImage"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                :disabled="!valid"
                :loading="loading"
                type="submit"
              >Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  /*validate({params, router}){
    Boolean(params.id) || this.$router.push('/admin/list')
  },*/
  head () {
    return { title: this.fulltitle }
  },
  data: () => ({
    loading: false,
    valid: true,
    isNewArticle: false,
    titleEdit: 'Изменить статью',
    titleNew: 'Создать статью',
    titleRules: [
      v => !!v.trim() || 'Название обязательно',
      v => (v.trim().length >= 3 && v.trim().length <= 120) || 'Не менее 3 и не более 120 символов'
    ],
    previewRules: [
      v => !!v.trim() || 'Описание обязательно',
      v => (v.trim().length >= 10 && v.trim().length <= 1000) || 'Не менее 100 и не более 1000 символов'
    ],
    detailRules: [
      v => !!v.trim() || 'Основной текст обязателен',
      v => (v.trim().length >= 10 && v.trim().length <= 10000) || 'Не менее 100 и не более 10000 символов'
    ]
  }),
  computed: {
    fulltitle: function () {
      //console.log(this)
      //if (this.$route.params.id === 'new') {
      if (this.isNewArticle) {
        return this.titleNew
      } else {
        return this.titleEdit + ' ID: ' + this.article._id
      }
    }
  },
  async asyncData ({ store, params }) {
    if (params.id === 'new') {
      const article = await store.dispatch('post/fetchEmptyArticle')
      const isNewArticle = true
      return { article, isNewArticle }
    } else {
      try {
        const article = await store.dispatch('post/fetchAdminById', params.id)
        return { article }
      }
      catch (e) {
        console.log('fetch article error', e)
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate() && this.image) {
        this.loading = true
        // let myform = document.getElementById('article-form')
        // let formData = new FormData(myform)

        let formData = {
          title: this.article.title,
          preview: this.article.preview,
          detail: this.article.detail,
          image: this.image
        }

        let msgSuccess = 'Статья добавлена'
        let storeRoute = 'post/create'

        if (this.isNewArticle === false) {
          msgSuccess = 'Статья обновлена'
          storeRoute = 'post/update'
          formData.id = this.article._id
        }

        this.$store.dispatch(storeRoute, formData)
          .then(res => {
            this.loading = false
            this.$toast.success(msgSuccess)
            this.$router.push('/admin')
          })
          .catch(e => {
            this.loading = false
            this.$toast.error('Ошибка' + e)
          })
      } else {
        this.$toast.error('Ошибка. Проверьте правильность заполнения')
      }
    },
    uploadImage (images) {
      this.image = images
      //console.log(images)
    }
  }
}
</script>

<style scoped>
</style>
