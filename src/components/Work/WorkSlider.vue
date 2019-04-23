<template>

</template>

<script>
import WorkSlider from './WorkSlider.vue'

export default {
	components: {
		WorkSlider
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.works-slider{
    display: none !important;
    //display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 78vh;
    //border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
