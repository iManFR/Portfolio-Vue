<template>
    <div class="slider-selector">
        <div class="current-slide">0{{ currentSlideId + 1 }}</div>
        <a href="#" class="allworks-button" data-hover>all works</a>
        <div class="total-slide">0{{ sliderLength }}</div>
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
			sliderLength: slides.length,
        }
    },

    computed: {
        currentSlideId() {
            return this.state.currentSlideId
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.slider-selector{
    position: absolute;
    right: -40px;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: $font-text;
    font-weight: 300;
    .current-slide{
        font-size: 20px;
    }
    .allworks-button{
        transform: rotate(90deg);
        font-size: 16px;
        text-decoration: none;
    }
    .allworks-button:before{
        content:"";
        display: inline-block;
        height: 0.5em;
        vertical-align: bottom;
        width: 45px;
        margin-right: 20px;
        //margin-left: -100%;
        border-top: 1px solid black;
    }
    .allworks-button:after{
        content:"";
        display: inline-block;
        height: 0.5em;
        vertical-align: bottom;
        width: 45px;
        margin-right: -100%;
        margin-left: 20px;
        border-top: 1px solid black;
    }
    .total-slide{
        font-size: 20px;
    }
}
</style>
