<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="date"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          color="grey darken-4"
        >
          <v-toolbar-title>Статьи блога</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.date="{ item }">
        {{new Date(item.date).toLocaleString()}}
      </template>
      <template v-slot:item.comments="{ item }">
        {{item.comments.length}}
      </template>
      <template v-slot:item.action="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              color="grey darken-2 mr-2"
              fab
              x-small
              v-on="on"
              @click="editItem(item._id)"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Изменить</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              color="grey darken-2"
              fab
              x-small
              v-on="on"
              @click="confirmDelete(item._id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Удалить</span>
        </v-tooltip>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Удалить статью?</v-card-title>
        <v-card-text>Это действие нельзя будет отменить.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-4"
            @click="dialog = false"
          >Нет, оставить</v-btn>
          <v-btn @click="deleteItem(dialog)">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    dialog: false,
    delPost: null,
    headers: [
      {
        text: 'Название',
        align: 'left',
        sortable: false,
        value: 'title',
      },
      { text: 'Дата', value: 'date' },
      { text: 'Просмторы', value: 'views' },
      { text: 'Комментарии', value: 'comments' },
      { text: 'ID', value: '_id' },
      { text: 'Действия', value: 'action', sortable: false },
    ],
  }),
  /*
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
  */
  async asyncData ({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },

  methods: {
    editItem (id) {
      this.$router.push(`/admin/post/${id}`)
    },

    confirmDelete (id) {
      this.dialog = true
      this.delPost = id
    },

    async deleteItem () {
      //confirm('Are you sure you want to delete this item?' + id)
      try {
        await this.$store.dispatch('post/remove', this.delPost)
        this.posts = this.posts.filter(p => p._id !== this.delPost)
        this.$toast.success('Статья удалена')
        this.dialog = false
      }
      catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
