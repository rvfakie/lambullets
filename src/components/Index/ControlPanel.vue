<template>
  <div class="control-panel-wrapper">
    <ControlPopup :images="images" :visible="visible" :togglePopup="togglePopup" />
    <div class="control-panel-wrapper">
      <div class="panel-container">
        <div class="panel-button" :class="{'active': this.visible, 'disabled': !this.images.length}" @click="togglePopup()"><i class="fas fa-code"></i></div>
      </div>
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

  .control-panel-wrapper {
    position: fixed;
    width: 60px;
    height: 500px;
    box-sizing: border-box;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .panel-container {
    padding: 50px 10px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    border: 1px solid #f3f3f3;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .panel-button {
    height: 40px;
    width: 100%;
    border: 1px solid #DDE5EC;
    border-radius: 2px;
    box-sizing: border-box;
    margin-bottom: 10px;
    cursor: pointer;
    transition: border .15s, color .15s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8B90A4;
    &:hover, &.active {
      border: 1px solid #a9b7c4;
      color: #003cff;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &.disabled {
      pointer-events: none;
      opacity: .6;
    }
  }

</style>

