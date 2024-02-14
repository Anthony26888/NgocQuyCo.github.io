<template lang="">
    <div class="loaderBar"></div>
</template>
<script>
export default {    
    mounted() {
        setTimeout(() => (
            this.active = true,
            this.off = false
        ), 2000)
    }  
}
</script>
<style scoped>
.loaderBar {
    width: calc(160px / 0.707);
    height: 10px;
    background: #F9F9F9;
    border-radius: 10px;
    border: 1px solid #80CBC4;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
}

.loaderBar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 5px;
    background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px) right/200% 100%;
    animation: fillProgress 2s ease-in-out infinite, lightEffect 1s infinite linear;
    animation-fill-mode: forwards;
}

@keyframes fillProgress {
    0% {
        width: 0;
    }

    33% {
        width: 33.333%;
    }

    66% {
        width: 66.67%;
    }

    100% {
        width: 100%;
    }
}

@keyframes lightEffect {

    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
        background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px) right/200% 100%;
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        background: repeating-linear-gradient(45deg, #26A69A 0 30px, #80CBC4 0 40px, rgba(255, 255, 255, 0.3) 0 40px) right/200% 100%;
    }
}</style>