<template>
    <div class="footer">
        <nav>
            <ul>
                <li data-hover><a target="_blank" href="https://www.instagram.com/manolo_pecout/">Instagram</a></li>
                <li data-hover><a target="_blank" href="#">Twitter</a></li>
                <li data-hover><a target="_blank" href="https://dribbble.com/iManFR">Dribbble</a></li>
                <li data-hover><a target="_blank" href="https://www.malt.fr/profile/manolopecout#edit-availability">Malt</a></li>
                <li data-hover><a target="_blank" href="https://github.com/iManFR">Github</a></li>
            </ul>
        </nav>
        <a href="mailto:manolo.p@hotmail.fr" data-hover>Contact</a>
    </div>
</template>

<script>
import WorkFooter from './WorkFooter.vue'

export default {
	components: {
		WorkFooter
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.footer{
    position: absolute;
    bottom: 0;
    /*bottom: 3.5vh;
    left: 3vw;*/
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 25px 35px;
    nav{
        ul{
            display: flex;
            flex-direction: row;
            li{
                a{
                    margin-right: 47px;
                    text-decoration: none;
                    font-family: $font-text;
                    font-weight: 300;
                }
            }
        }
    }
    a{
        text-decoration: none;
        font-family: $font-text;
        font-weight: 300;
        color: #000;
    }
}
</style>
