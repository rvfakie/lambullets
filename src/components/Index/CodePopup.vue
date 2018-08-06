<template>
  <div class="control-popup-wrapper" :class="{visible}" @click="togglePopup()">
    <div class="popup-container" :class="{visible}" @click="$event.stopPropagation()">
      <div class="popup-header">
        <div class="popup-close-button" @click="togglePopup()"><i class="fas fa-times"></i></div>
      </div>
      <div class="popup-content">
        <div class="control-button" @click="copyRaw(computeValue)">
          Copy raw
          <div class="control-action" :class="{'show-action': status.processed}">{{ status.text }}</div>
        </div>
        <textarea :ref="'textarea'" :value="computeValue"></textarea>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'CodePopup',
  props: ['visible', 'togglePopup', 'images', 'styleProp'],
  data(){
    return {
      status: {
        processed: false,
        text: null
      }
    }
  },
  watch: {
    visible: {
      immediate: false, 
      handler(state) {
        if (state === true) {
          const ref = this.$refs.textarea;
          ref.focus();
          ref.scrollTop = 0;
        }
      }
    }
  },
  computed: {
    computeValue() {
      return `<script>${this.generateJs()}<\/script><style>${this.generateCss()}</style>`;
    }
  },
  methods: {
    generateJs() {
      const js = `
        ;(function() {
          var c = '.stk-image-figure';
          var bulletsInImages = ${JSON.stringify( this.images.map(image => image.bullets.length) )};
          bulletsInImages.forEach(function(bullets, index) {
            var image = document.querySelectorAll(c)[index];
            image.classList.add('lam-bullet-image');
            image.classList.add('lam-bullet-image-'+ (index + 1));
            for (var i = 0; i < bullets; i++) {
              var bullet = document.createElement('div');
              bullet.classList.add('lam-bullet');
              bullet.classList.add('lam-bullet-'+ (index + 1) +'-'+ (i + 1));
              bullet.innerHTML = i + 1;
              image.appendChild(bullet);
            }
          });
        })();
      `;
      
      return js;
    },
    generateCss() {
      const css = `
      .lam-bullet-image { position: relative !important; }
      .lam-bullet { 
        width: ${this.styleProp.diameter}px; 
        height: ${this.styleProp.diameter}px; 
        background: ${this.styleProp.background};
        border: ${this.styleProp.border};
        font-size: ${this.styleProp.numbered ? '12px' : '0'};
        position: absolute; 
        box-sizing: border-box;
        border-radius: 50%;
        transform: translate3d(-50%, -50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      ${ this.images.map((image, imageIndex) => {
        return image.bullets.map((bullet, bulletIndex) => {
          return `.lam-bullet-${imageIndex + 1}-${bulletIndex + 1} {top: ${bullet.top}%; left: ${bullet.left}%;}`;
        }).join(' ');
      }).join('') }`;

      return css;
    },
    copyRaw(value) {
      this.copyToClipboard(value) ? this.status.text = 'Copied' :  this.status.text = 'Error';
      this.status.processed = true;
      setTimeout(() => {
        this.status.processed = false;
      }, 1000);
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
    textarea {
      width: 100%;
      height: 100%;
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
      position: relative;
      box-sizing: border-box;
      padding: 30px;
      background: #2c2a2a;
      color: #fff;
      outline: none;
      appearance: none;
      border: none;
      font-size: 16px;
    }
  }
  .control-button {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 15px;
    padding: 4px 8px;
    color: #fff;
    background: #5f5f5f;
    border-radius: 2px;
    font-size: 10px;
    cursor: pointer;
    transition: background .15s;
    z-index: 1;
    text-transform: uppercase;
    &:hover {
      background: #6f6f6f;
    }
  }
  .control-action {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 10px);
    padding: 4px 8px;
    font-size: 10px;
    color: #3f3f3f;
    background: #fff;
    text-transform: uppercase;
    border-radius: 2px;
    opacity: 0;
    transition: opacity 1s;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: -10px;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-bottom: 5px solid #fff;
    }
    &.show-action {
      transition: opacity .15s;
      opacity: 1;
    }
  }
</style>

