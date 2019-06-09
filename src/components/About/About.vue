<template>
    <div class="about-view">
        <div class="backworks-button animated fadeInRight">
            <router-link tag="a" to="/work" data-hover>Back to works</router-link>
        </div>
        <div class="about-build">
            <div class="about-picture">

            </div>
            <div class="about-text animated fadeInRight">
                <p>{{text[0]}}</p>
                <p>{{text[1]}}</p>
            </div>
        </div>
        <WorkFooter></WorkFooter>
    </div>
</template>

<script>
import WorkFooter from '../Work/WorkFooter.vue'

export default {
    data() {
        return {
            text: [
                "Hey !",
                " I’m Manolo Pecout, a french web student at HETIC and freelance web developper and web designer on my free time. Feel free to contact me to talk about your project"
            ],
        }
    },
	components: {
        WorkFooter,
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.about-view{
    transition: all 1s ease-in-out;
    .backworks-button{
        position: absolute;
        top: 0;
        right: 0;
        padding: 25px 0px 25px 35px;
        z-index: 10;
        a{
            font-family: $font-title;
            font-size: 24px;
            text-decoration: none;
        }
        a:after {
            content:"";
            display: inline-block;
            height: 0.6em;
            vertical-align: bottom;
            width: 70px;
            margin-right: -100%;
            margin-left: 20px;
            border-top: 1px solid black;
            transition: width 0.5s ease-in-out;
        }
        a:hover::after {
            content:"";
            display: inline-block;
            height: 0.6em;
            vertical-align: bottom;
            width: 40px;
            margin-right: -100%;
            margin-left: 20px;
            border-top: 1px solid black;
        }
    }
    .about-build{
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        .about-picture{
            height: 100vh;
            width: 100%;
        }
        .about-text{
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p{
                width: 70%;
                font-family: $font-text;
                font-weight: 300;
                font-size: 18px;
                margin: 10px 0px;
                line-height: 23px;
            }
        }
    }
}
</style>
