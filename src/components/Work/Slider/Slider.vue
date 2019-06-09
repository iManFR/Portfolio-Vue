<template>
    <div class="slider-container">
        <SliderInfo></SliderInfo>
        <!-- <SliderIllustration 
            v-for="_slide in slides"
            v-bind:key="_slide.id"
            v-bind:title="_slide.title"
            v-bind:date="_slide.date"
            v-bind:skills="_slide.skills"
            v-bind:role="_slide.role">
        </SliderIllustration> -->
        <SliderIllustration></SliderIllustration>
        <SliderSelector></SliderSelector>
    </div>
</template>

<script>
import SliderInfo from './SliderInfo.vue'
import SliderIllustration from './SliderIllustration.vue'
import SliderSelector from './SliderSelector.vue'

import SliderStore from '../../../stores/SliderStore.js'

const slides = require('./slides.json').slides

export default {

    beforeCreate(){
        this.slides = slides
    },

    //Reset slider when quit it
    beforeDestroy(){
        SliderStore.reset()
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
        nextSlide(){
            this.goToSlide(this.currentSlideId + 1)
        },

        prevSlide(){
            this.goToSlide(this.currentSlideId - 1)
        },

        goToSlide(slideId){
            let lastSlideId = this.currentSlideId
            let direction

            if (slideId >= slides.length) {
                direction = 'next'
                SliderStore.reset()
            }
            else if (slideId < 0) {
                direction = 'prev'
                SliderStore.setSlideId(slides.length-1)
            }
            else {
                this.currentSlideId < slideId ? direction = 'next' : direction = 'prev'
                direction === 'next' ? SliderStore.next() : SliderStore.prev()
            }
        },
    },

    created () {
        // document.addEventListener('wheel', (e) => {
        //     if (e.deltaX > 200){
        //         this.nextSlide()
        //     } else if (e.deltaX < 200){
        //         this.prevSlide()
        //     }
        // }),
        document.addEventListener('keyup', (e) => {
            if (e.which === 39 | e.which === 40){
                this.nextSlide()
            } else if (e.which === 37 | e.which === 38) {
                this.prevSlide()
            }
        })
    },

	components: {
        SliderInfo,
        SliderIllustration,
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
