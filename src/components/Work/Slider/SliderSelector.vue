<template>
    <div class="slider-selector">
        <div class="work-current">01</div>
        <a href="#" class="allworks-button">all works</a>
        <div class="work-total">0{{ sliderLength }}</div>
    </div>
</template>

<script>
import SliderSelector from './SliderSelector.vue'

const slides = require('./slides.json').slides

export default {
    data(){
        return {
            sliderLength: slides.length,
        }
    },
	components: {
        SliderSelector,
    },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.slider-selector{
    position: absolute;
    right: -25px;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: $font-text;
    font-weight: 300;
    .work-current{
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
    .work-total{
        font-size: 20px;
    }
}
</style>
