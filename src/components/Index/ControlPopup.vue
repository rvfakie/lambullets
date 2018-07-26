<template>
  <div class="control-popup-wrapper" :class="{visible}" @click="togglePopup()">
    <div class="control-popup-container" :class="{visible}" @click="$event.stopPropagation()">
      <textarea :value="computeValue"></textarea>
      
    </div>
  </div>
</template>


<script>

export default {
  name: 'ControlPopup',
  props: ['visible', 'togglePopup'],
  data(){
    return {
      l: 2
    }
  },
  computed: {
    computeValue() {
      return `
        <script>
          ;(function() {
            document.querySelectorAll('.class').forEach(function(el, index) {
              el.classlist.add('lam-bullet-image lam-bullet-image-'+index + 1);
              ${this.getBullets()}
            })
          })();
        <\/script>
      `
    }
  },
  methods: {
    getBullets() {
      let result = '';
      for (let x = 0; x < this.l; x++) {
        result += `var image${x + 1}BulletsLength = 3;
              for (var x = 0; x < image${x + 1}BulletsLength; x++) {
                el.appendChild('<div class="lam-bullet lam-bullet-'+x + 1"></div>');
              }`
      }
      return result;
    }
  }
}

</script>


<style lang="scss" scoped>
  .control-popup-wrapper {
    position: fixed;
    background: rgba(0,0,0,.15);
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
  .control-popup-container {
    width: 100%;
    max-width: 700px;
    height: 450px;
    background: #fff;
    transform: translateY(100%);
    transition: transform .15s ease-out;
    padding: 20px;
    box-sizing: border-box;
    textarea {
      width: 100%;
      position: relative;
      height: 100%;
      box-sizing: border-box;
      padding: 30px;
      background: #2c2a2a;
      color: #fff;
      outline: none;
      appearance: none;
      border: none;
      font-size: 16px;
    }
    &.visible {
      transform: translateY(0);
    }
  }
</style>

