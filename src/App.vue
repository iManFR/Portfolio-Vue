<template>
	<div id="app">
        <!-- <transition name="view-fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
            <router-view></router-view>
        <!-- </transition> -->
        <Lines></Lines>
        <canvas class="js-canvas"></canvas>
	</div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Work from './components/Work/Work.vue'
import About from './components/About/About.vue'
import Lines from './components/Lines.vue'

//import Cursor from './scripts/cursor.js'

export default {
	components: {
        Home,
        Work,
        About,
		Lines
	}
}
</script>

<style lang="scss">
@import './styles/variables.scss';

body,html{
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
}

*{
    cursor: none;
}

*::selection{
    background-color: black;
    color: white;
}

canvas{
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 3;
  pointer-events: none;
  //mix-blend-mode: difference;
}
</style>