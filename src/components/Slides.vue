<template>
    <transition-group name="fade" mode="out-in" tag="div" id="slides">
        <div class="slideParent" :key="image.id">
            <div class="slideImage" :style="setBackgroundImage"></div>
        </div>
    </transition-group>
</template>

<script>
export default {
    props: ["image"],
    computed: {
        setBackgroundImage() {
            return { backgroundImage: "url(" + this.image.url + ")" };
        },
    },
};
</script>

<style scoped>
#slides .slideParent {
    height: 200px;
    width: 100%;
}
#slides .slideImage {
    height: 200px;
    width: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation-fill-mode: forwards;
    animation-name: zoom;
    animation-duration: 4s;
    animation-iteration-count: 1;
}
@keyframes zoom {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
}

.fade-enter-active {
    animation-name: fadeEnter;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
.fade-move {
    transition: all 1s;
}
.fade-leave-active {
    animation-name: fadeLeave;
    animation-duration: 1s;
    animation-iteration-count: 1;
    position: absolute;
}
@keyframes fadeEnter {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeLeave {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
