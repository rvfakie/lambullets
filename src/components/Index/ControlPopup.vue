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
  props: ['visible', 'togglePopup', 'images'],
  data(){
    return {
      l: 2
    }
  },
  computed: {
    computeValue() {
      return `<script>${this.generateJs()}<\/script><style>${this.generateCss()}</style>`;
    }
  },
  methods: {
    generateJs() {
      let js = `
        ;(function() {
          var c = '.stk-image-figure';
           var images = ${JSON.stringify(this.images.map(image => {
            return {bullets: image.bullets.map(bullet => {
              return {top: bullet.top, left: bullet.left};
            })};
          }))};

          images.forEach(function(image, imageIndex) {
            var element = document.querySelectorAll(c)[imageIndex];
            element.classList.add('lam-bullet-image');
            element.classList.add('lam-bullet-image-'+ (imageIndex + 1));
            image.bullets.forEach(function(bullet, bulletIndex) {
              var child = document.createElement('div');
              child.classList.add('lam-bullet');
              child.classList.add('lam-bullet-'+ (imageIndex + 1) +'-'+ (bulletIndex + 1));
              child.innerHTML = bulletIndex + 1;
              element.appendChild(child);
            });
          });

        })();
      `;
      

      return js;
    },
    generateCss() {
      let css = `
      .lam-bullet-image { position: relative !important; }
      .lam-bullet { 
        position: absolute; 
        width: 25px; 
        height: 25px; 
        background: red;
        border-radius: 25px;
        transform: translate3d(-50%, -50%, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }`;
      this.images.forEach((image, imageIndex) => {
        image.bullets.forEach((bullet, bulletIndex) => {
          css += `.lam-bullet-${imageIndex + 1}-${bulletIndex + 1} {top: ${bullet.top}%; left: ${bullet.left}%;}`
        })
      });

      return css;
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

