<template>
  <div class="control-panel-wrapper">
    <div v-for="(image, index) in images" :key="image.id">
      {{image.bullets}}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ControlPanel',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        
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

  

</style>
