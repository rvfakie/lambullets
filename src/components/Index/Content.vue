<template>
  <div class="bullets-content-wrapper">
    <ControlPanel :images="images" :options="options" :changePinStyle="changeSelectedPinStyle" />
    <div class="bullets-images-wrapper">
      <BulletsImageItem v-for="(image, imageIndex) in images" :options="options" :image="image" :imageIndex="imageIndex" :key="image.id"/>
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
      options: {
        pin: {
          selected: 0,
          styles: [
            {
              name: 'Style 1',
              diameter: 25,
              background: 'red',
              border: '2px solid #000',
              numbered: true
            },
            {
              name: 'Style 2',
              diameter: 20,
              background: 'white',
              border: '1px solid #000',
              numbered: false
            }
          ]
        }
      }
    }
  },
  methods: {
    changeSelectedPinStyle(index) {
      this.options.pin.selected = index;
    }
  }
}

</script>


<style lang="scss" scoped>

</style>

