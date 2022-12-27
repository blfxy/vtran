<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import vHeader from "./components/layout/vHeader.vue";
import vTools from "./components/layout/vTools.vue";
import vBanner from "@/components/vBanner.vue";
import vBg from "@/components/vBg.vue";
import vAside from "@/components/aside/index.vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

const mdList = import.meta.globEager("./blogs/*.md");
let articleList = reactive([]);
Object.keys(mdList).forEach((key) => {
    const { attributes, html } = mdList[key] || {};
    // attributes.html = html;
    articleList.push(attributes);
});
counter.setArticleList(articleList);

// 监听滚动
window.addEventListener("scroll", function (e) {
    // 获取页面Y轴的滚动距离
    const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
    counter.setScrollHeight(scrollY);
    // aside距离窗口顶部距离
    const boardListenheight = document
        .querySelector("#board-listen-height")
        .getBoundingClientRect();
    counter.setAsideHeight(boardListenheight.height);
    counter.setAsideDistanceFromFrame(boardListenheight.top);
});
</script>

<template>
    <v-bg></v-bg>
    <div class="vtran-box">
        <v-header></v-header>
        <v-banner></v-banner>
        <div class="vtran-content-box v-width">
            <v-aside></v-aside>
            <div class="v-content">
                <RouterView />
            </div>
        </div>
    </div>
    <v-tools></v-tools>
</template>

<style lang="scss" scoped>
.vtran-box {
    .vtran-content-box {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 0 auto;
        .v-content {
            padding: 0 24px;
            flex: 1;
        }
    }
}
</style>
