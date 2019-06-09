<template>
    <div class="slider-info">
        <div class="slider-info-item slider-info-date">
            <div class="slider-info-title">Date</div>
            <div class="slider-info-content">{{ slides[currentSlideId].date }}</div>
        </div>
        <div class="slider-info-item slider-info-skills">
            <div class="slider-info-title">Skills</div>
            <div class="slider-info-content">{{ slides[currentSlideId].skills }}</div>
        </div>
        <div class="slider-info-item slider-info-client">
            <div class="slider-info-title">Client</div>
            <div class="slider-info-content">{{ slides[currentSlideId].title }}</div>
        </div>
        <div class="slider-info-item slider-info-role">
            <div class="slider-info-title">Role</div>
            <div class="slider-info-content">{{ slides[currentSlideId].role }}</div>
        </div>
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

}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.slider-info{
    position: absolute;
    left: -195px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
    transform: rotate(-90deg);
    //width: 550px;
    .slider-info-item{
        margin: 0px 20px;
        transition: all 0.6s ease-in-out;
        will-change: transform;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        white-space: nowrap;
    }
    .slider-info-item:hover{
        transform: rotate(+90deg);
    }
    .slider-info-title{
        font-family: $font-title;
        font-size: 18px;
        margin: 5px 0px;
    }
    .slider-info-content{
        font-family: $font-text;
        font-weight: 300;
        font-size: 16px;
        margin: 5px 0px;
    }
}
</style>
