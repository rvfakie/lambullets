<template>
  <div class="content-wrapper">
    <div class="content">
      <h1>LAM Bullets</h1>

      <div class="files-uploader-wrapper">
        Тут блок добавить изображение
      </div>

      <div class="blocks-container">
        <div class="block-box" v-for="(image, index) in images" :key="index">
          <div class="block-image-container"></div>
          <div class="block-data-container">
            <div class="block-data-options">
              <h3>Настройки</h3>
              <div class="block-data-panel"></div>
            </div>
            <div class="block-data-code">
              <h3>Код</h3>
              <div class="block-data-panel"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      images: [
        {
          
        },
        {

        }
      ]
    }
  },
  computed: {
    
  },
  methods: {

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
  .block-box {
    
  }
  .block-image-container {
    background: #eee;
    height: 680px;
    margin-bottom: 40px;
  }
  .block-data-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 140px;
  }
  .block-data-options {
    width: calc(40% - 20px);
  }
  .block-data-code {
    width: 60%;
  }
  .block-data-panel {
    height: 300px;
    background: #eee;
  }
</style>
