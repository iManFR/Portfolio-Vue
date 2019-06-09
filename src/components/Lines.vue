<template>
    <div class="lines">
        <div class="vertical-lines"></div>
        <div class="vertical-lines"></div>
        <div class="vertical-lines"></div>
        <div class="vertical-lines"></div>
        <div class="vertical-lines"></div>
    </div>
</template>

<script>

export default {
    
}

</script>

<style lang="scss" scoped>
.lines{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: -10;
    .vertical-lines{
        height: 100vh;
        width: calc(100vw/6);
        border-right: 1px solid #cacaca;
        opacity: 0.4;
    }
}
</style>
