<template>
    <div id="slider">
        <div class="arrowLeft" @click="arrowLeft()"></div>
        <Slides :image="album[chosenImage]" />
        <div class="arrowRight" @click="arrowRight()"></div>
    </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
    components: {
        Slides,
    },
    props: ["album"],
    data() {
        return {
            chosenImage: 0,
            intervalObject: null,
        };
    },
    methods: {
        arrowLeft() {
            clearInterval(this.intervalObject);
            this.moveLeft();
            var self = this;
            this.intervalObject = setInterval(() => {
                self.moveLeft();
            }, 4000);
        },
        arrowRight() {
            clearInterval(this.intervalObject);
            this.moveRight();
            var self = this;
            this.intervalObject = setInterval(() => {
                self.moveRight();
            }, 4000);
        },
        moveLeft() {
            var flag = this.chosenImage;
            flag--;
            if (flag < 0) {
                flag = 4;
            }
            this.chosenImage = flag;
        },
        moveRight() {
            var flag = this.chosenImage;
            flag++;
            if (flag >= 5) {
                flag = 0;
            }
            this.chosenImage = flag;
        },
    },
    created() {
        var self = this;
        this.intervalObject = setInterval(() => {
            self.moveLeft();
        }, 4000);
    },
};
</script>

<style scoped>
#slider {
    position: relative;
    overflow: hidden;
}

#slider .arrowLeft,
#slider .arrowRight {
    position: absolute;
    top: 50%;
    border: 20px solid transparent;
}
#slider .arrowLeft {
    border-right-color: green;
    z-index: 1;
}
#slider .arrowRight {
    right: 0;
    border-left-color: green;
}
</style>
