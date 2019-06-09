<template>
    <div class="header">
        <h1>Manolo Pecout</h1>
        <div class="about-link animated fadeInRight">
            <router-link tag="a" to="/about" data-hover>about me</router-link>
        </div>
    </div>
</template>

<script>

export default {
	components: {
		
    },
}

</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.header{
    position: absolute;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 25px 0px 25px 35px;
    h1{
        font-family: $font-logo;
        font-size: 32px;
    }
    .about-link{
        a{
            font-family: $font-title;
            font-size: 24px;
            text-decoration: none;
            color: #000;
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
}
</style>
