<template>
  <div class="mb-4">
    <canvas
      ref="canvas"
      height="200"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    labels: { type: Array, default () { return [] } },
    data: { type: Array, default () { return [] } },
    title: { type: String, default () { return [] } }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    Chart.defaults.global.defaultFontColor = '#eee'
    const chartdata = {
      labels: this.labels,
      datasets: [
        {
          label: this.title,
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    }
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
    this.renderChart(chartdata, options)
  },
  head () {
    return { title: 'Аналитика' }
  }
}
</script>
