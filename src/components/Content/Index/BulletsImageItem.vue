<template>
  <div class="bullets-image-item">
    <h1 class="bullets-image-name">Изображение {{imageIndex + 1}}</h1>

    <div class="bullets-image-wrapper">
      <div class="bullets-image">
        <img :src="image.url" @click="addBullet($event)">

        <div
          class="bullet"
          v-bind:style="getBulletStyles(bullet)"
          @click="removeBullet(bullet.id)"
          v-for="(bullet, bulletIndex) in bullets"
          :key="bullet.id"
        >
          <div class="bullet__number">{{bulletIndex + 1}}</div>
        </div>

      </div>
    </div>

    <div class="bullets-image-panel">
        <div class="bullets-image-info"></div>
        <div class="bullets-image-code">
          <BulletsCode :bullets="bullets" :imageIndex="imageIndex" />
        </div>
    </div>
    
  </div>
</template>


<script>
import BulletsCode from './BulletsCode'

const getBulletPosition = (event) => {
  let imageWrapper = event.currentTarget.parentNode;

  let pxPosition = {
    top: event.pageY - imageWrapper.offsetTop,
    left: event.pageX - imageWrapper.offsetLeft
  }

  let percentPosition = {
    percentTop: pxPosition.top / event.currentTarget.clientHeight * 100,
    percentLeft: pxPosition.left / event.currentTarget.clientWidth * 100
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
    }
  },

  components: { BulletsCode },

  data(){
    return {
      bullets: [],
      bulletDiameter: 25
    }
  },

  methods: {

    addBullet(event){
      let bulletPosition = getBulletPosition(event);

      this.bullets.push({
        id: this.generateId(),
        percentTop: bulletPosition.percentTop,
        percentLeft: bulletPosition.percentLeft
      });
    },

    removeBullet(id){
      let bulletIndex = this.bullets.findIndex(bullet => bullet.id === id);

      if (bulletIndex !== -1) {
        this.bullets.splice(bulletIndex, 1);
      }
    },

    getBulletStyles(bullet){
      return {
        top: bullet.percentTop + '%',
        left: bullet.percentLeft + '%',
        width: this.bulletDiameter + 'px',
        height: this.bulletDiameter + 'px',
      };
    }

  }
}

</script>


<style lang="scss">
  .bullets-image-item{
    margin-bottom: 200px;
  }

  .bullets-image-name{
    margin-bottom: 20px;
  }

  .bullets-image-wrapper{
    margin-bottom: 30px;
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
      top: 50%;
      left: 50%;
      width: 25px;
      height: 25px;
      display: flex;
      border-radius: 50%;
      background: #003cff;
      box-shadow: inset 0 0 0 2px black;
      transform: translate(-50%,-50%);
      cursor: pointer;
      
      .bullet__number{
        margin: auto;
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        color: white;
        user-select: none;
      }
    }
  }

</style>

