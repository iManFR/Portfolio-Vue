<template>
    <transition
            name="show-view"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
        <div class="work">
            <WorkHeader></WorkHeader>
            <Slider></Slider>
            <!-- <WorkMenu></WorkMenu> -->
            <WorkFooter></WorkFooter>
        </div>
    </transition>
</template>

<script>
import Work from './Work.vue'
import WorkHeader from './WorkHeader.vue'
import Slider from './Slider/Slider.vue'
//import WorkMenu from './WorkMenu.vue'
import WorkFooter from './WorkFooter.vue'

export default {
	components: {
        Work,
        WorkHeader,
        Slider,
        //WorkMenu,
        WorkFooter,
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.work{
    position: absolute;
    height: 100vh;
    width: 100vw;
    transition: all 1s ease-in-out;
}
</style>