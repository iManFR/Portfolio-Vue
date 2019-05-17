<template>
    <div class="work-info">
        <div class="work-info-item work-info-date">
            <div class="work-info-title">Date</div>
            <div class="work-info-content">{{ date }}</div>
        </div>
        <div class="work-info-item work-info-skills">
            <div class="work-info-title">Skills</div>
            <div class="work-info-content">HTML/CSS/JS</div>
        </div>
        <div class="work-info-item work-info-client">
            <div class="work-info-title">Client</div>
            <div class="work-info-content">Mosaiculture</div>
        </div>
        <div class="work-info-item swork-info-role">
            <div class="work-info-title">Role</div>
            <div class="work-info-content">Dev, Design</div>
        </div>
    </div>
</template>

<script>
import SliderInfo from './SliderInfo.vue'

const slides = require('./slides.json').slides

export default {
    data(){
        return {
            date: slides.date,
        }
    },
	components: {
        SliderInfo,
    },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.work-info{
    position: absolute;
    left: -180px;
    display: flex;
    flex-direction: row;
    text-align: center;
    transform: rotate(-90deg);
    .work-info-item{
        margin: 0px 20px;
        transition: all 0.6s ease-in-out;
        will-change: transform;
    }
    .work-info-item:hover{
        transform: rotate(+90deg);
    }
    .work-info-title{
        font-family: $font-title;
        font-size: 18px;
        margin: 5px 0px;
    }
    .work-info-content{
        font-family: $font-text;
        font-weight: 300;
        font-size: 16px;
        margin: 5px 0px;    
    }
}
</style>
