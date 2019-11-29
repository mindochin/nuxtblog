<template>
  <v-list>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      router
      exact
    >
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Аналитика',
          to: '/admin'
        },
        {
          icon: 'mdi-pencil',
          title: 'Создать',
          to: '/admin/create'
        },
        {
          icon: 'mdi-view-list',
          title: 'Статьи',
          to: '/admin/list'
        },
        {
          icon: 'mdi-account-group',
          title: 'Пользователи',
          to: '/admin/user'
        },
        {
          icon: 'mdi-arrow-left-circle-outline',
          title: 'На сайт',
          to: '/'
        },
      ]
    }
  }
}
</script>
