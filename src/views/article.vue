<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
onMounted(() => {
    const url = window.location.pathname.split("/");
    const curId = url[url.length - 1];
    const curArticle = counter.articleList.find((item) => {
        return (item.id = curId);
    });
    console.log(curArticle);
    counter.setCurArticle(curArticle.html);
});
</script>
<template>
    <article class="markdown-body" v-html="counter.curArticle"></article>
</template>
<style lang="scss" scoped>
.markdown-body {
    box-sizing: border-box;
    border-radius: 12px;
    padding: 24px;
    color: var(--v-txt-color);
    font-family: XiaoWei-Regular, MaShanZheng-Regular;
    background: var(--v-bg-light-color);
    background: -webkit-linear-gradient(
        to top,
        var(--v-bg-light-color),
        var(--v-bg-deep-color)
    );
    background: linear-gradient(
        to bottom,
        var(--v-bg-light-color),
        var(--v-bg-deep-color)
    );
    ::v-deep(pre) {
        color: rgba(0, 0, 0, 0.8);
    }
}
</style>
