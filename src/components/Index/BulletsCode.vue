<template>
  <div class="code-wrapper" v-if="bullets.length">
    
    <div class="code-half-container">
      <h3>HTML</h3>
      <div class="code-container">
        <div>
          &lt;<span class="tag-name">div</span> <span class="tag-class">class</span>=<span class="tag-class-name">"lam-bullet-image lam-bullet-image-{{ imageIndex + 1 }}"</span>&gt;
            <div v-for="(bullet, bulletIndex) in bullets" :key="bullet.id">
              &nbsp;&nbsp;&lt;<span class="tag-name">div</span> <span class="tag-class">class</span>=<span class="tag-class-name">"lam-bullet lam-bullet-{{ imageIndex + 1 }}-{{ bulletIndex + 1 }}"</span>&gt;&lt;/<span class="tag-name">div</span>&gt;
            </div>
          &lt;/<span class="tag-name">div</span>&gt;
        </div>
      </div>
    </div>

    <div class="code-half-container">
      <h3>CSS</h3>
      <div class="code-container">
        <div class="code-copy-raw" @click="copyRaw(bullets, imageIndex)" :data-id="`cr-${imageIndex}`">
          Copy raw
          <div class="code-copy-action">Copied</div>
        </div>
        <div class="code-formatted">
          <div>
            <span class="class-name">.lam-bullet-image-{{ imageIndex + 1 }}</span> {
              <br><br>
            }
          </div>

          <div v-for="(bullet, bulletIndex) in bullets" :key="bullet.id">
            <span class="class-name">.lam-bullet-{{ imageIndex + 1 }}-{{ bulletIndex + 1 }}</span> {
              <div>&nbsp;&nbsp;<span class="property-name">top</span>: {{ bullet.percentTop }}%;</div>
              <div>&nbsp;&nbsp;<span class="property-name">left</span>: {{ bullet.percentLeft }}%;</div>
            }
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  export default {
    props: ['bullets', 'image', 'imageIndex'],
    data(){
      return {
        
      }
    },
    computed: {
      
    },
    methods: {
      copyRaw(bullets, imageIndex) {
        let res = `.lam-bullet-image-${imageIndex + 1}{}`;
        bullets.forEach((el, bulletIndex) => {
          res += `.lam-bullet-${imageIndex + 1}-${bulletIndex + 1}{top:${el.percentTop}%;left:${el.percentLeft}%;}`
        });
        if (this.copyToClipboard(res)) {
          const element = document.querySelector(`.code-copy-raw[data-id="cr-${imageIndex}"] .code-copy-action`);
          element.classList.add('show-action');
          setTimeout(() => {
            element.classList.remove('show-action');
          }, 1000);
        };
      }
    },
    mounted() {
      
    }
  }

</script>


<style lang="scss" scoped>

  h3 {
    margin-bottom: 10px;
  }
  
  .code-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .code-half-container {
    width: calc(50% - 10px);
  }
  .code-copy-raw {
    position: absolute;
    right: 30px;
    top: 30px;
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
  .code-copy-action {
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
  .code-container {
    position: relative;
    box-sizing: border-box;
    padding: 30px;
    background: #2c2a2a;
    color: #fff;
    .class-name {
      color: greenyellow;
    }
    .property-name {
      color: skyblue;
    }
    .tag-name {
      color: #ea1b51;
    }
    .tag-class {
      color: greenyellow;
    }
    .tag-class-name {
      color: #dada7c;
    }
    .html-comment {
      color: #7f7f7f;
    }
  }

  @media (max-width: 780px) {
    .code-wrapper{
      flex-direction: column;
    }
    .code-half-container{
      width: 100%;
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 0;
      }
    }

  }

</style>

