<template>
  <div class="bullets-images-wrapper">
    <BulletsImageItem v-for="image in images" :image="image" :key="image.id"/>
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


<style lang="scss">

</style>

