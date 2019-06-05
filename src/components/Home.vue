<template>
  <div id="app">
		  <top></top>
			<HelloWorld></HelloWorld>
			<footers></footers>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import top from './top.vue'
import footers from './footer.vue'
export default {
  name: 'Home',
  components: {
		top:top,
		HelloWorld:HelloWorld,
		footers:footers,
  }
}
</script>

<style>
#app {

}
</style>
