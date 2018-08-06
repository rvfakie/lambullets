<template>
  <div class="bullets-image-item">
    <h1 class="bullets-image-name">Image {{imageIndex + 1}}</h1>

    <div class="bullets-image-wrapper">
      <div class="bullets-image">
        <div class="bullets-image-error" v-if="image.error">{{ image.error }}</div>
        <img :src="image.url" @click="addBullet($event, image.bullets)">

        <div
          class="bullet"
          v-for="(bullet, bulletIndex) in image.bullets"
          :key="bullet.id"
          :style="getBulletStyles(bullet)"
          @click="removeBullet(bullet.id, image.bullets)"
        >
          {{bulletIndex + 1}}
        </div>

      </div>
    </div>

    <div class="bullets-image-panel">
      <div class="bullets-image-info"></div>
    </div>
    
  </div>
</template>


<script>

const getBulletPosition = (event) => {
  let imageWrapper = event.currentTarget.parentNode;

  let pxPosition = {
    top: event.pageY - imageWrapper.offsetTop,
    left: event.pageX - imageWrapper.offsetLeft
  }

  let percentPosition = {
    top: pxPosition.top / event.currentTarget.clientHeight * 100,
    left: pxPosition.left / event.currentTarget.clientWidth * 100
  }

  return percentPosition;
}

export default {

  props: {
    image: {
      type: Object,
      required: true
    },
    imageIndex: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      bulletDiameter: 25
    }
  },
  computed: {
    selected() {
      return this.options.pin.selected;
    },
    style() {
      return this.options.pin.styles[this.selected];
    }
  },
  methods: {
    addBullet(event, bullets){
      let bulletPosition = getBulletPosition(event);

      bullets.push({
        id: this.generateId(),
        top: bulletPosition.top,
        left: bulletPosition.left
      });
    },
    removeBullet(id, bullets){
      let bulletIndex = bullets.findIndex(bullet => bullet.id === id);

      if (bulletIndex !== -1) {
        bullets.splice(bulletIndex, 1);
      }
    },
    getBulletStyles(bullet){
      return {
        top: bullet.top + '%',
        left: bullet.left + '%',
        width: this.style.diameter + 'px',
        height: this.style.diameter + 'px',
        background: this.style.background,
        border: this.style.border,
        'font-size': this.style.numbered ? '12px' : '0px'
      };
    }
  },
}

</script>


<style lang="scss" scoped>
  .bullets-image-item{
    margin-bottom: 200px;
  }

  .bullets-image-name{
    margin-bottom: 20px;
  }

  .bullets-image-wrapper{
    margin-bottom: 30px;
  }

  .bullets-image-error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Proxima Nova Black", sans-serif;
    text-align: center;
    font-size: 28px;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 0, 0, 0.637);
  }

  .bullets-image{
    position: relative;
    display: inline-block;
    box-shadow: 0 0 0 1px #aaa;
    cursor: crosshair;
    line-height: 0;

    img{
      max-width: 100%;
    }

    .bullet{
      position: absolute;
      display: flex;
      border-radius: 50%;
      transform: translate(-50%,-50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }

</style>

