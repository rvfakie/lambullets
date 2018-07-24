<template>
  <div class="bullets-images-wrapper">
    <BulletsImageItem v-for="(image, imageIndex) in images" :image="image" :imageIndex="imageIndex" :key="image.id"/>
  </div>
</template>


<script>
import BulletsImageItem from './BulletsImageItem'

export default {
  name: 'BulletsImagesList',
  components: { BulletsImageItem },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
    }
  },
  methods: {

  }
}

</script>


<style lang="scss" scoped>

</style>

