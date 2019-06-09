<template>
    <transition
        name="work-anim"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
    >
        <div class="work">
            <WorkHeader></WorkHeader>
            <Slider></Slider>
            <!-- <WorkMenu></WorkMenu> -->
            <!-- <Maintenance></Maintenance> -->
            <WorkFooter></WorkFooter>
        </div>
    </transition>
</template>

<script>
import WorkHeader from './WorkHeader.vue'
import Slider from './Slider/Slider.vue'
//import WorkMenu from './WorkMenu.vue'
//import Maintenance from './Maintenance.vue'
import WorkFooter from './WorkFooter.vue'

export default {
    data(){
        return {
            
        }
    },
    
	components: {
        WorkHeader,
        Slider,
        //WorkMenu,
        //Maintenance,
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
}

</style>