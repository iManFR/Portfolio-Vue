<template>
    <div class="slider-container">
        <SliderInfo></SliderInfo>
        <SliderSelector></SliderSelector>
    </div>
</template>

<script>
import SliderInfo from './SliderInfo.vue'
import SliderSelector from './SliderSelector.vue'

const slides = require('./slides.json').slides

export default {
	components: {
        SliderInfo,
        SliderSelector,
    },
}
</script>

<style lang="scss" scoped>

.slider-container{
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
