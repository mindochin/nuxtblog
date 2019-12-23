<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="3"
          >
            <app-sidebar />
          </v-col>
          <v-col
            cols="12"
            sm="8"
            md="9"
          >
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '@/components/main/Header'
import AppFooter from '@/components/main/Footer'
import AppSidebar from '@/components/main/Sidebar'

export default {
  components: { AppHeader, AppFooter, AppSidebar },
  data () {
    return {
    }
  },
  created () {
    this.$vuetify.theme.light = false
    this.$vuetify.theme.vblog = true
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1185px;
}
</style>
