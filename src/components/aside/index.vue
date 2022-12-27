<script setup>
import { onMounted, ref, nextTick } from "vue";
import vBoard from "./vBoard.vue";
import vListen from "./vListen.vue";
import vRelvant from "./vRelevant.vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
onMounted(async () => {
    // 初始化左侧菜单距离窗口顶部距离
    await nextTick();
    const boardListenheight = document
        .querySelector("#board-listen-height")
        .getBoundingClientRect();
    counter.setAsideDistanceFromFrame(boardListenheight.top);
});
</script>
<template>
    <div class="v-aside-box">
        <div id="board-listen-height">
            <v-board></v-board>
            <v-listen></v-listen>
        </div>
        <v-relvant></v-relvant>
    </div>
</template>
<style lang="scss" scoped>
.v-aside-box {
    width: 240px;
    padding: 0 24px;
}
</style>
