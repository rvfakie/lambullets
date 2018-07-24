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
        <div>
          <span class="class-name">.lam-bullet-image</span> {
            <div>&nbsp;&nbsp; <span class="property-name">position</span>: relative;</div>
          }
        </div>
        <div>
          <span class="class-name">.lam-bullet</span> {
            <div>&nbsp;&nbsp; <span class="property-name">position</span>: absolute;</div>
            <div>&nbsp;&nbsp; <span class="property-name">transform</span>: translate3d(-50%, -50%, 0);</div>
          }
        </div>
        
        <br>
        <div class="html-comment">/* ~~~~~~~~~~~~~~~~~~~~~~~ */</div>
        <br>

        <div>
          <span class="class-name">.lam-bullet-image-{{ imageIndex + 1 }}</span> {
            <br><br>
          }
        </div>

        <div v-for="(bullet, bulletIndex) in bullets" :key="bullet.id">
          <span class="class-name">.lam-bullet-{{ imageIndex + 1 }}-{{ bulletIndex + 1 }}</span> {
            <div>&nbsp;&nbsp; <span class="property-name">top</span>: {{ bullet.top }}px;</div>
            <div>&nbsp;&nbsp; <span class="property-name">left</span>: {{ bullet.left }}px;</div>
          }
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  export default {
    props: ['bullets', 'imageIndex'],
    data(){
      return {
        
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
  .code-container {
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

</style>

