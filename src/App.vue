<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: { Index }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Proxima Nova Regular";
    src: url("assets/fonts/proximanova-reg/proximanova-reg.woff");
  }
  @font-face {
    font-family: "Proxima Nova Bold";
    src: url("assets/fonts/proximanova-bold/proximanova-bold.woff");
  }
  @font-face {
    font-family: "Proxima Nova Black";
    src: url("assets/fonts/proximanova-black/proximanova-black.woff");
  }
  @font-face {
    font-family: "Proxima Nova Light";
    src: url("assets/fonts/proximanova-Light/proximanova-light.woff");
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Proxima Nova Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: initial;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  h1 {
    font-family: "Proxima Nova Black", sans-serif;
  }
  h2, h3 {
    font-family: "Proxima Nova Bold", sans-serif;
  }

  .content {
    max-width: 1020px;
    margin: auto;
    padding-top: 100px;
  }
</style>
