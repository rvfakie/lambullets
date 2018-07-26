<template>
  <div class="content-wrapper">
    <div class="content">
      <h1>LAM Bullets</h1>
      <Uploader :images="images" />
      <Content :images="images" />
    </div>
  </div>
</template>

<script>

  import Content from './Content'
  import Uploader from './Uploader'

  export default {
    name: 'Index',
    components: { Uploader, Content },
    data() {
      return {
        images: []
      }
    },
    computed: {
      
    },
    methods: {
      
    },
    mounted() {
      
    }
  }

</script>

<style lang="scss" scoped>

  h1 {
    text-transform: uppercase;
    margin-bottom: 60px;
  }

</style>
