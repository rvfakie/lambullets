<template>
  <div class="control-popup-wrapper" :class="{visible}" @click="togglePopup()">
    <div class="popup-container" :class="{visible}" @click="$event.stopPropagation()">
      <div class="popup-header">
        <div class="popup-close-button" @click="togglePopup()"><i class="fas fa-times"></i></div>
      </div>
      <div class="popup-content">
        <div class="pin-style-wrapper">
          <div class="pin-style-container" @click="change(index)" :class="{'selected': selected === index}" v-for="(style, index) in styles" :key="index">
            <div class="pin" :style="getPinStyle(style)">1</div>
            <div class="style-name">{{ style.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'PinOptionsPopup',
  props: ['visible', 'togglePopup', 'selected', 'styles', 'change'],
  data(){
    return {
      
    }
  },
  methods: {
    getPinStyle(style) {
      return {
        width: `${style.diameter}px`,
        height: `${style.diameter}px`,
        background: style.background,
        border: style.border,
        'font-size': style.numbered ? '12px' : '0px'
      }
    }
  }
}

</script>


<style lang="scss" scoped>
  .control-popup-wrapper {
    position: fixed;
    background: rgba(0,0,0,.45);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    &.visible {
      opacity: 1;
      pointer-events: all;
    }
  }
  .popup-container {
    width: 100%;
    max-width: 700px;
    transform: translateY(100%);
    transition: transform .15s ease-out;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.55);
    &.visible {
      transform: translateY(0);
    }
  }
  .popup-header {
    display: flex;
    justify-content: flex-end;
    padding: 7px;
  }
  .popup-close-button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3f3f3f;
    cursor: pointer;
    transition: opacity .15s;
    &:hover {
      opacity: .5;
    }
  }
  .popup-content {
    height: 450px;
    position: relative;
  }

  .pin-style-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 20px;
  }
  .pin-style-container {
    width: 25%;
    height: 150px;
    margin-right: 20px;
    border-radius: 2px;
    border: 1px solid #DDE5EC;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #eee 0%, #fefefe 100%);
    cursor: pointer;
    &.selected {
      border: 1px solid #003cff;
    }
  }
  .pin {
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .style-name {
    text-transform: uppercase;
    font-family: "Proxima Nova Bold", sans-serif;
  }
</style>

