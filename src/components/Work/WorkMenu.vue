<template>
    <div class="work-menu">
        <div class="work-menu-item">
            <a href="#"><h3>MOSAICULTURE</h3></a>
        </div>
        <div class="work-menu-item">
            <a href="#"><h3>BLOGFIRE</h3>
        </div>
        <div class="work-menu-item">
            <a href="#"><h3>TECHSTORY</h3>
        </div>
        <div class="work-menu-item">
            <a href="#"><h3>EPIC FIGHT</h3>
        </div>
        <div class="work-menu-item">
            <a href="#"><h3>ECURIE ST M</h3>
        </div>
        <div class="work-menu-item">
            <a href="#"><h3>COBA</h3></a>
        </div>
    </div>
</template>

<script>
import WorkMenu from './WorkMenu.vue'

export default {
	components: {
		WorkMenu,
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.work-menu{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 78vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    .work-menu-item{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
        h3{
            font-family: $font-title;
            font-size: 175px;
            color: black;
            transition: all 0.4s ease-in-out;
        }
        h3:hover{
            color: white;
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: black;
        }
    }
}
</style>
