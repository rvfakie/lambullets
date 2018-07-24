<template>
  <div class="bullets-image-wrapper">
  
    <div class="bullets-image">
      <img :src="image.url" @click="addBullet($event)">

      <div
        v-bind:style="{
          top: bullet.top + 'px',
          left: bullet.left + 'px',
          width: 2 * bulletRadius + 'px',
          height: 2 * bulletRadius + 'px',
        }"
        v-for="(bullet, bulletIndex) in bullets"
        @click="bulletHandler($event, bullet.id)"
        :key="bullet.id"
        class="bullet">

          {{ bulletIndex + 1}}
      </div>

    </div>

    <div class="bullets-image-panel">
      <div class="bullets-image-config">
        <input type="number" class="bullet-radius" name="bullet-radius" placeholder="Bullet radius" step="1" />
      </div>
      <div class="bullets-image-code"></div>
      <BulletsCode :bullets="bullets" :imageIndex="imageIndex" />
    </div>

  </div>
</template>


<script>
let bulletId = 0;

function getBulletPosition(event, bulletRadius) {
  let imageWrapper = event.currentTarget.parentNode;

  let mousePos = {
    x: event.pageX,
    y: event.pageY
  };

  return {
    top: mousePos.y - imageWrapper.offsetTop - bulletRadius,
    left: mousePos.x - imageWrapper.offsetLeft - bulletRadius
  };
}

import BulletsCode from './BulletsCode'

export default {
  props: ['image', 'imageIndex'],
  components: { BulletsCode },
  data(){
    return {
      bullets: [],
      bulletRadius: 10
    }
  },
  methods: {
    addBullet(event){
      let bulletPosition = getBulletPosition(event, this.bulletRadius);

      this.bullets.push({
        id: ++bulletId,
        top: bulletPosition.top,
        left: bulletPosition.left
      });
    },
    moveBullet(event){

    },
    removeBullet(id){
      let bulletIndex = this.bullets.findIndex(bullet => bullet.id === id);

      if (bulletIndex !== -1) {
        this.bullets.splice(bulletIndex, 1);
      }
    },

    bulletHandler(event,bulletId){
      this.removeBullet(bulletId);
    }
  }
}

</script>


<style lang="scss">
  .bullets-image-wrapper{
    margin-bottom: 200px;
  }

  .bullets-image{
    position: relative;
    display: inline-block;
    line-height: 0;

    img{
      max-width: 100%;
    }

    .bullet{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: red;
      box-shadow: inset 0 0 0 2px black;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
    }
  }

</style>

