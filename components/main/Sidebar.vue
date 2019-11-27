<template>
  <div class="sidebar">
    <v-card class="brown lighten-5">
      <v-card-title>
        Категории
      </v-card-title>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Welcome',
          to: '/'
        },
        {
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background: #efebe9;
}
</style>
