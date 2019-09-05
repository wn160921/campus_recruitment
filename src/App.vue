<template>
    <div id="app">
        <div class="head">
            <div class="logo">
                <img height="100px" src="./assets/index_logo.png">
            </div>
            <div class="path">
                <router-link to="/jobFairs">招聘会</router-link>
            </div>
            <div class="path">
                <router-link to="/doubleChoose">双选会</router-link>
            </div>
            <div class="path">
                <router-link to="/lecture">宣讲会</router-link>
            </div>
            <div class="path">
                <router-link to="/positions">职位</router-link>
            </div>
        </div>
        <div class="hrDiv"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data() {
            return {
                keyword: ''
            }
        }
    }
</script>

<style lang="scss">
    body{
        background: #f9f9f9;
    }
    #app {
        min-width: 1200px;
    }

    .router-link-active {
        color: red;
        font-size: larger;
    }

    .path a{
        text-decoration: none;
    }

    .head {
        text-align: center;
        background: white;
        border-bottom: #f26222 2px solid;

        div {
            display: inline-block;
            height: 100px;
            line-height: 100px;
            vertical-align: middle;
        }
        .logo {
            width: 500px;
            font-size: larger;
        }
        .path {
            width: 100px;
        }

    }

</style>
