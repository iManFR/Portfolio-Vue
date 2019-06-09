<template>
    <div class="slider-illustration animated fadeIn">
        <a :href="slides[currentSlideId].url" target="_blank">
            <img :src="slides[currentSlideId].illustration" alt="" data-hover>
        </a>
    </div>
</template>

<script>
import SliderStore from '../../../stores/SliderStore.js'

const slides = require('./slides.json').slides

export default {

    beforeCreate(){
        this.slides = slides
    },

    data(){
        return {
            state: SliderStore.state,
        }
    },

    computed: {
        currentSlideId() {
            return this.state.currentSlideId
        }
    },

    methods: {
        
    },

}
</script>

<style lang="scss" scoped>
.slider-illustration{
    height: 100%;
    width: calc((100%/3)*2);
    //border: 1px solid black;
    //background-color: grey;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
    }
}
</style>
