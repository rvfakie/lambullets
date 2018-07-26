<template>
  <div class="bullets-content-wrapper">
    <ControlPanel :images="images" />
    <div class="bullets-images-wrapper">
      <BulletsImageItem v-for="(image, imageIndex) in images" :image="image" :imageIndex="imageIndex" :key="image.id"/>
    </div>
  </div>
</template>


<script>
import BulletsImageItem from './BulletsImageItem'
import ControlPanel from './ControlPanel'

export default {
  name: 'BulletsImagesList',
  components: { ControlPanel, BulletsImageItem },
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

