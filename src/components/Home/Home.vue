<template>
    <div class="home-view">
        <h1>Manolo Pecout</h1>
        <router-link tag="a" to="/work"><h2>Hi I'm Manolo, A Web developer and designer</h2></router-link>
        <div class="scroll">
            <p>scroll down</p>
            <div class="vl_contain">
                <div class="vl"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue'

export default {
	components: {
		Home
    },
    data () {
        return {
            
        }
    },
    methods: {
		showWork(){
            
        }
	},
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.home-view{
    //display: none;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    transition: all 1s ease-in-out;
    opacity: 1;
    h1{
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: $font-logo;
        font-size: 10vw;
        white-space: nowrap;
    }
    h2{
        position: absolute;
        top: 78%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: $font-title;
        font-size: 42px;
        font-weight: 100;
        text-align: center;
    }
    .scroll{
        position: absolute;
        bottom: 0%;
        right: 2%;
        z-index: 1;
        p{
            font-family: $font-text;
            font-weight: 300;
            font-size: 20px;
            transform: rotate(90deg);
            margin-bottom: 43px;
            white-space: nowrap;
        }
        .vl_contain{
            width: 100%;
            min-height: 80px;
            .vl{
                border-left: 1px solid black;
                min-height: 55px;
                position: absolute;
                left: 50%;
                margin-left: 0px;
                bottom: 0;
            }
        }
    }
}

.home-view.hide{
    transform: translateY(-100%);
    opacity: 0;
}
</style>
