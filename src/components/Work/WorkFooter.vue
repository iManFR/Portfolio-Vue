<template>
    <div class="footer">
        <nav>
            <ul>
                <li><a target="_blank" href="https://www.instagram.com/manolo_pecout/">Instagram</a></li>
                <li><a target="_blank" href="https://www.facebook.com/man.olo.378">Facebook</a></li>
                <li><a target="_blank" href="#">Twitter</a></li>
                <li><a target="_blank" href="https://dribbble.com/iManFR">Dribbble</a></li>
                <li><a target="_blank" href="https://www.behance.net/manolopecoee2b">Behance</a></li>
            </ul>
        </nav>
        <a href="mailto:manolo.p@hotmail.fr">Contact</a>
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
