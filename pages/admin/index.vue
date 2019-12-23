<template>
  <v-container fluid>
    <h1>Управление сайтом</h1>
    <app-analytics-chart
      title="Просмотры"
      :labels="views.labels"
      :data="views.data"
    />
    <app-analytics-chart
      title="Комменты"
      :labels="comments.labels"
      :data="comments.data"
    />
  </v-container>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
  layout: 'admin',
  components: { AppAnalyticsChart },
  async asyncData ({ store }) {
    const { comments, views } = await store.dispatch('post/getAnalytics')
    return { comments, views }
  }
}
</script>
