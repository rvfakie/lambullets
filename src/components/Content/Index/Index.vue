<template>
  <div class="content-wrapper">
    <div class="content">
      <h1>LAM Bullets</h1>
      <Uploader :images="images" />
      <BulletsImagesList :images="images" />
    </div>
  </div>
</template>

<script>

  import BulletsImagesList from './BulletsImagesList'
  import Uploader from './Uploader'

  export default {
    name: 'Index',
    components: { Uploader, BulletsImagesList },
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
