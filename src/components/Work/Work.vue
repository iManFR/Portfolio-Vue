<template>
    <div class="main-view">
        <WorkHeader></WorkHeader>
        <WorkSlider></WorkSlider>
        <WorkFooter></WorkFooter>
    </div>
</template>

<script>
import Work from './Work.vue'
import WorkHeader from './WorkHeader.vue'
import WorkSlider from './WorkSlider.vue'
import WorkFooter from './WorkFooter.vue'

export default {
	components: {
        Work,
        WorkHeader,
        WorkSlider,
        WorkFooter,
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.main-view{
    //display: block;
    position: absolute;
    height: 100vh;
    width: 100vw;
    transition: all 1s ease-in-out;
}
</style>
