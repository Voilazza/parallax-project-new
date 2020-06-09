<template>
    <div id="app" @wheel="scrollHandler" @keydown.left="keyHandler" @keydown.right="keyHandler" tabindex="0" v-focus>
        <div class="main-container">
            <header>
                <h1>
                    Увлекательная история моих приключений
                </h1>
                <div class="bubble-enlarge" id="bubble-enlarge"></div>
            </header>
            <router-view/>
        </div>
    </div>
</template>


<script lang="js">
    export default {
        name: "App",
        data() {
            return {
                scrollDelta: 20
            };
        },
        methods: {
            scrollHandler(event) {
                event.preventDefault();
                this.scroll(-event.wheelDeltaX / 3);
            },
            keyHandler(event) {
                if (event.repeat) {
                    this.scrollDelta += 5;
                } else {
                    this.scrollDelta = 20;
                }
                this.scroll(event.key === "ArrowRight" ? this.scrollDelta : -this.scrollDelta);
            },
            scroll(delta) {
                document.getElementById('scroll-container').scrollBy({left: delta, top: 0, behavior: "auto"});
            }
        },
        directives: {
            focus: {
                inserted(el) {
                    el.focus()
                }
            }
        }
    }
</script>

<style lang="scss">
    body, html {
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
    }

    .main-container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40% 60%;
        overflow: hidden;
        /*background-image: linear-gradient(to right top, #c9b6a7, #c4bba7, #bcc1ab, #b3c6b3, #abcabf, #abc9be, #abc8bd, #abc7bc, #b2c1b0, #b8baa9, #bcb4a5, #bcaea5);*/
        background: white;
    }

    .main-container header h1 {
        font-family: 'Poiret One', cursive;
        font-weight: lighter;
        font-size: 40px;
    }


</style>