<template>
  <div class="bullets-images-wrapper">
    <BulletsImageItem
      v-for="(image, imageIndex) in images"
      :image="image"
      :imageIndex="imageIndex"
      :key="image.id"
      v-on:change-bullets="onChangeBullets"
    />
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
      allBullets: []
    }
  },
  methods: {
    onChangeBullets ({bullets, imageIndex, imageId}) {
      this.$set(this.allBullets, imageIndex, {
        imageId,
        bullets
      });
    }
  }
}

</script>


<style lang="scss" scoped>

</style>

