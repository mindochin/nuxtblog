<template>
  <h1>Post</h1>
</template>

<script>
export default {
  validate ({ params }) { return Boolean(params.id) }
}
</script>
