<template>
  <v-app :dark="true">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <app-admin-sidebar />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        @click.stop="miniVariant = !miniVariant"
        icon
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        @click.stop="clipped = !clipped"
        icon
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        @click.stop="fixed = !fixed"
        icon
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        router
        to="/admin/logout"
      >
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppAdminSidebar from '@/components/admin/AppAdminSidebar'

export default {
  created: function () {
    this.$vuetify.theme.dark = true
  },
  components: { AppAdminSidebar },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      title: 'Управление сайтом'
    }
  },
  methods: {

  }
}
</script>
