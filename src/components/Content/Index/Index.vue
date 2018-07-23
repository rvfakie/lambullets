<template>
  <div class="content-wrapper">
    <div class="content">

      <h1>LAM Bullets</h1>

      <Uploader :images="images" />

      <div class="blocks-container">
        <div class="block" v-for="(image, index) in images" :key="index">
          <div class="image-container">
            <img :src="image.url" @click="addBullet($event, image)" />

            <!-- <img :src="image.url" @click="addBullet($event, image)" />
            <div 
              class="image-bullet" 
              v-for="(bullet, index) in image.bullets" 
              :key="index" 
              :style="{top: bullet.y, left: bullet.x}">
                {{ index }}
            </div> -->

          </div>
          <div class="data-container">
            <div class="data-options">
              <h3>Настройки</h3>
              <div class="data-panel"></div>
            </div>
            <div class="data-code">
              <h3>Код</h3>
              <div class="data-panel"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import Uploader from './Uploader'

  export default {
    name: 'Index',
    components: { Uploader },
    data() {
      return {
        images: []
      }
    },
    computed: {
      
    },
    methods: {
      // IMAGES COMPONENT

      // addBullet(e, image) {
      //   const { bullets } = image;
      //   const difference = e.target.parentNode.offsetWidth - e.target.offsetWidth;

      //   bullets.push({
      //     x: `${e.offsetX + difference / 2}px`,
      //     y: `${e.offsetY}px`
      //   });
      // }

      // END IMAGES COMPONENT
    },
    mounted() {
      
    }
  }

</script>

<style lang="scss" scoped>

  h1 {
    text-transform: uppercase;
    margin-bottom: 60px;
  }
  h3 {
    margin-bottom: 10px;
  }

  .blocks-container {
    display: flex;
    flex-direction: column;
  }
  .block {
    
  }

  // IMAGES COMPONENT

  .image-container {
    background: #eee;
    margin-bottom: 40px;
    position: relative;
    img {
      max-width: 100%;
      display: block;
      margin: auto;
    }
  }
  // .image-bullet {
  //   $s: 25px;
  //   width: $s;
  //   height: $s;
  //   border-radius: $s;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   text-align: center;
  //   position: absolute;
  //   background: #003cff;
  //   color: #fff;
  //   font-size: 14px;
  //   border: 1px solid #fff;
  //   box-sizing: border-box;
  //   transform: translate3d(-50%, -50%, 0);
  //   cursor: default;
  // }

  // END IMAGES COMPONENT

  .data-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 140px;
  }
  .data-options {
    width: calc(40% - 20px);
  }
  .data-code {
    width: 60%;
  }
  .data-panel {
    height: 300px;
    background: #eee;
  }

</style>
