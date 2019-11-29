<template>
  <v-sheet color="primary">
    <v-container>
      <v-row align="center">
        <v-col
          cols="6"
          md="4"
        >
          <span class="subtitle-1">VLADBLOG.RU</span><br>
          <span class="caption">Записки веб-разработчика (ex. сисадмина)</span>
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
          &nbsp;
        </v-col>
        <v-col
          id="header-search"
          xs="6"
          md="4"
        >
          <v-text-field
            v-model="searchString"
            @click:append="headerSearchClick"
            @keyup.enter="headerSearchClick"
            append-icon="mdi-magnify"
            hide-details
            filled
            flat
            solo
            label="Найти что-нибудь"
            type="text"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    searchString: ''
  }),
  methods: {
    headerSearchClick (e) {
      alert(this.searchString)
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #d7ccc8;
}
</style>
