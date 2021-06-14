<template>
    <div id="navbar">
        <h1 id="name">Nic Ballesteros</h1>
        <div id="router-line">
            <router-link class="router-link" to="/resume">Resume</router-link>
            <router-link class="router-link" to="/">Home</router-link>
            <router-link class="router-link" to="/work">Portfolio</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    #name {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    #router-line {
        display: inline-block;
        width: auto;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-box-align: stretch;
        -webkit-align-items: strech;
        -ms-flex-align: stretch;
        align-items: strech;
        -webkit-align-content: strech;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
    }

    .router-link {
        display: inline-block;
        margin: 0px 20px 0px 20px;
        font-size: 16px;
        font-style: italic;
        text-decoration: none;
    }
</style>