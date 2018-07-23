<template>
  <div class="files-upload-container">
    <input type="file" accept="image/x-png, image/gif, image/jpeg" multiple @change="invoke($event)" />
    <div class="upload-button">drag'n'drop or click to add image</div>
  </div>
</template>

<script>

export default {
  name: 'Uploader',
  props: ['images'],
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    invoke(e) {
      const input = event.target;

      for (let key in input.files) {
        if (key !== 'length' && key !== 'item') {
          const el = input.files[key];

          const reader = new FileReader();
          reader.onloadend = () => {
            this.images.push({
              url: reader.result,
              bullets: []
            })
          }
          reader.readAsDataURL(el);
        }
      }
    }
  },
  mounted() {
    
  }
}

</script>

<style lang="scss" scoped>

  .files-upload-container {
    height: 200px;
    margin-bottom: 80px;
    border: 1px dashed #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-family: "Proxima Nova Bold", sans-serif;
    position: relative;
    input[type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    &:hover {
      .upload-button {
        opacity: .5;
      }
    }
  }
  .upload-button {
    color: #003cff;
    transition: opacity .15s;
    pointer-events: none;
  }

</style>
