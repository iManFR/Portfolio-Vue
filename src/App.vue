<template>
	<div id="app">
        <transition
            name="show-view"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
		    <router-view></router-view>
        </transition>
        <Lines></Lines>
	</div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Work from './components/Work/Work.vue'
import About from './components/About/About.vue'
import Lines from './components/Lines.vue'

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

*::selection{
    background-color: black;
    color: white;
}
</style>