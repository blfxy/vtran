import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
    // 默认主题
    const themes = ref("midnight");
    // body滚动高度
    const scrollHeight = ref(0);
    // aside距框口距离
    const asideDistanceFromFrame = ref(0);
    // aside高度（公告+卿听吾语）
    const asideHeight = ref(0);
    const curArticle = ref("");
    const articleList = ref([]);

    const setScrollHeight = (val) => {
        scrollHeight.value = val;
    };
    const setThemes = (val) => {
        themes.value = val;
    };
    const setAsideDistanceFromFrame = (val) => {
        asideDistanceFromFrame.value = val;
    };
    const setAsideHeight = (val) => {
        asideHeight.value = val;
    };
    const setCurArticle = (val) => {
        curArticle.value = val;
    };
    const setArticleList = (val) => {
        articleList.value = val;
    };

    return {
        scrollHeight,
        setScrollHeight,
        themes,
        setThemes,
        asideDistanceFromFrame,
        setAsideDistanceFromFrame,
        asideHeight,
        setAsideHeight,
        curArticle,
        setCurArticle,
        articleList,
        setArticleList,
    };
});
