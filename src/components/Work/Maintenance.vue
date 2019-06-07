<template>
    <div class="construction animated fadeIn">Site en construction</div>
</template>

<script>
import Maintenance from './Maintenance.vue'

export default {
	components: {
		Maintenance
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.construction{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4vw;
    font-family: $font-title;
}

</style>
