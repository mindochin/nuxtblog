<template>
  <div>
    <app-post
      v-for="post of 3"
      :key="post"
    />
  </div>
</template>

<script>
import AppPost from '@/components/main/Post'
export default {
  head: { title: 'Главная' },
  components: { AppPost }
}
</script>
