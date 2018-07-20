<template>
  <div id="app">
    <Header />
    <Index />
  </div>
</template>

<script>
import Index from './components/Content/Index'
import Header from './components/Header/Header'

export default {
  name: 'App',
  components: { Index, Header }
}
</script>

<style>

</style>
