<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { setHeaderBg } from "@/utils/index.js";
import themesData from "@/config/themes.js";
const counter = useCounterStore();
const themes = ref({
    twitch: ["fas", "circle-half-stroke"],
    midnight: ["fas", "lightbulb"],
});

const setThemes = () => {
    let themes = counter.themes;
    if (themes === "twitch") {
        themes = "midnight";
    } else if (themes === "midnight") {
        themes = "twitch";
    }
    counter.setThemes(themes);
    const curThemes = themesData[counter.themes];
    for (let key in curThemes) {
        document.body.style.setProperty(`--${key}`, curThemes[key]);
    }
    // 切换主题时重置header背景
    setHeaderBg(counter.scrollHeight, counter.asideDistanceFromFrame);
};
const setScrollHeight = () => {
    let height = counter.scrollHeight;
    const timer = setInterval(() => {
        document.documentElement.scrollTop = height - 100;
        height = height - 100;
        if (height <= 0) {
            clearInterval(timer);
        }
    }, 30);
};
</script>
<template>
    <ul class="v-tools">
        <li
            class="txt-color d-l-b-bg v-hover"
            @click="setScrollHeight"
            :class="counter.scrollHeight > 500 ? 'show-to-top' : 'hide-top-top'"
        >
            <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </li>
        <li class="txt-color d-l-b-bg v-hover" @click="setThemes">
            <font-awesome-icon :icon="themes[counter.themes]" />
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.v-tools {
    position: fixed;
    right: 24px;
    bottom: 100px;
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 42px;
        height: 42px;
        margin-top: 8px;
        border-radius: 4px;
    }
    .hide-top-top {
        animation: hide-to-top 1s;
        transform: translateX(80px);
    }
    .show-to-top {
        animation: show-to-top 1s;
    }
}
@keyframes hide-to-top {
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(80px);
    }
}
@keyframes show-to-top {
    from {
        transform: translateX(80px);
    }
    to {
        transform: translateX(0px);
    }
}
</style>
