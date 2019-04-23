<template>
    <div class="about-view">
        <div class="backworks-button">
            <router-link tag="a" to="/work">Back to works</router-link>
        </div>
        <div class="about-build">
            <div class="about-picture">

            </div>
            <div class="about-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloremque illum culpa officiis architecto ab, aliquid laudantium omnis numquam facere odio harum accusamus autem, dignissimos similique obcaecati minima qui commodi.</p>
            </div>
        </div>
        <WorkFooter></WorkFooter>
    </div>
</template>

<script>
import About from './About.vue'
import WorkFooter from '../Work/WorkFooter.vue'

export default {
	components: {
        About,
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
            p{
                width: 70%;
                font-family: $font-text;
                font-weight: 300;
                font-size: 18px;
            }
        }
    }
}
</style>
