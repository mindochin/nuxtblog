<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          @submit.native.prevent="onSubmit"
        >
          <v-card>

            <v-toolbar color="grey darken-4">
              <v-toolbar-title>{{fulltitle}}
                <v-divider
                  class="mx-4"
                  inset1
                  dark
                  vertical
                />
                <small>
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
                    class="mr-1"
                  >
                    mdi-eye-outline
                  </v-icon>
                  <span class="mr-2">999</span>
                  <v-icon
                    small
                    dark
                  >
                    mdi-comment-multiple-outline
                  </v-icon>
                  <span>45</span>
                </small>
              </v-toolbar-title>

            </v-toolbar>

            <v-card-text>

              <v-text-field
                v-model.trim="controls.title"
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
                v-model.trim="controls.previewText"
                filled
                id="previewText"
                label="Превью текст"
                name="previewText"
                auto-grow0
                :rules="previewTextRules"
                :counter="1000"
                requred
              />

              <v-textarea
                v-model.trim="controls.detailText"
                filled
                auto-grow
                id="detailText"
                label="Основной текст"
                name="detailText"
                :rules="detailTextRules"
                :counter="10000"
                requred
              />
              <tiptap-vuetify
                v-model.trim="controls.previewText"
                :extensions="extensions"
                :toolbar-attributes="{ color: 'grey darken-4' }"
                :card-props="{ filled: true  }"
                :counter="10000"
                requred
                filled
                auto-grow
              />
              <tinymce-editor
                v-model.trim="controls.previewText"
                api-key="no-api-key"
                :init="{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                  skin:'oxide-dark',
                  skin_url: '/css/mytinymceskin',
                  content_style: 'div { background-color: grey }',
                  selector: 'textarea'
                }"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                :disabled="!valid"
                :loading="loading"
                type="submit"
              >Обносить</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History, CodeBlock, Image } from 'tiptap-vuetify'
import Editor from '@tinymce/tinymce-vue'

export default {
  components: { TiptapVuetify, 'tinymce-editor': Editor },
  layout: 'admin',
  /*validate({params, router}){
    Boolean(params.id) || this.$router.push('/admin/list')
  },*/
  head () {
    return { title: this.fulltitle }
  },
  data: () => ({
    extensions: [
      History,
      Paragraph,
      Bold, Italic, Underline, Strike,
      [Heading, {
        options: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }],
      Blockquote,
      Code, CodeBlock,
      Link, Image,
      ListItem, BulletList, OrderedList,
      HorizontalRule,
      HardBreak
    ],
    loading: false,
    valid: true,
    title: 'Изменить статью',
    controls: {
      title: '',
      previewText: '',
      detailText: '',
    },
    titleRules: [
      v => !!v.trim() || 'Название обязательно',
      v => (v.trim().length >= 3 && v.trim().length <= 120) || 'Не менее 3 и не более 120 символов'
    ],
    previewTextRules: [
      v => !!v.trim() || 'Превью обязательно',
      v => (v.trim().length >= 100 && v.trim().length <= 1000) || 'Не менее 100 и не более 1000 символов'
    ],
    detailTextRules: [
      v => !!v.trim() || 'Основной текст обязателен',
      v => (v.trim().length >= 100 && v.trim().length <= 10000) || 'Не менее 100 и не более 10000 символов'
    ]
  }),
  computed: {
    fulltitle: function () { return this.title + ' ID: ' + this.post._id }
  },
  async asyncData ({ store, params }) {
    try {
      const post = await store.dispatch('post/fetchAdminById', params.id)
      return { post }
    }
    catch (e) { console.log(e) }

  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        const formData = {
          id: this.post._id,
          title: this.controls.title,
          previewText: this.controls.previewText,
          detailText: this.controls.detailText
        }

        this.$store.dispatch('post/update', formData)
          .then(res => {
            this.loading = false
            this.$toast.success('Статья обновлена!')
            this.$router.push('/admin/post')
          })
          .catch(e => {
            this.loading = false
            this.$toast.error('Ошибка' + e)
          })
      }
    }
  }
}
</script>

<style scoped>
.tox .tox_edit_area .tox-edit-area__iframe {
  background-color: grey;
}
</style>
