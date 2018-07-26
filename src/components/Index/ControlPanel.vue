<template>
  <div class="control-panel-wrapper">
    <ControlPopup :visible="visible" :togglePopup="togglePopup" />
    <div class="control-panel-container">
      <div class="panel-button" @click="togglePopup()">s</div>
      <div class="panel-button"></div>
    </div>
  </div>
</template>


<script>
import ControlPopup from './ControlPopup'

export default {
  name: 'ControlPanel',
  components: { ControlPopup },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      visible: false
    }
  },
  methods: {
    togglePopup() {
      this.visible = !this.visible;
    }
  }
}

</script>


<style lang="scss" scoped>

  .control-panel-container {
    position: fixed;
    width: 60px;
    height: 500px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .panel-button {
    height: 40px;
    width: 100%;
    border: 1px solid #cecece;
    border-radius: 2px;
    box-sizing: border-box;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background .15s;
    &:hover {
      background: #eee;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>

