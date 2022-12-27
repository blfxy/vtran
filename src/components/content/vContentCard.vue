<script setup>
import dayjs from "dayjs";
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
defineProps(["article"]);
const router = useRouter();
const articleDetail = (article) => {
    counter.setCurArticle(article.html);
    router.push({
        path: `/article/${article.id}`,
    });
};
</script>
<template>
    <article class="v-content-card l-d-t-bg">
        <h3
            @click="() => articleDetail(article)"
            class="v-title-txt-size txt-bright-color"
        >
            {{ article.title }}
        </h3>
        <ul class="txt-color txt-size">
            <li>
                <font-awesome-icon :icon="['fas', 'user']" />
                <span class="txt-bright-color">{{
                    article.author || "-"
                }}</span>
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'clock']" />
                <span>{{
                    article.createDate
                        ? dayjs(article?.createDate).format(
                              "YYYY-MM-DD HH:mm:ss"
                          )
                        : "-"
                }}</span>
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'eye']" />
                <span>{{ article.watchNum || "-" }}</span>
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'tag']" />
                <span class="txt-bright-color">{{
                    article.tags[0] || "-"
                }}</span>
            </li>
        </ul>
        <ul class="txt-color txt-size">
            <li>
                <font-awesome-icon :icon="['fas', 'file-word']" />
                <span>{{ article.wordNum || "-" }}</span>
            </li>
            <li>
                <font-awesome-icon :icon="['fas', 'hourglass']" />
                <span>{{ article.readingTime || "-" }}</span>
            </li>
        </ul>
        <p class="txt-color txt-size">{{ article.desc }}</p>
        <div class="v-card-tag txt-bright-color">
            <font-awesome-icon :icon="['fas', 'tags']" />
            <span v-for="item in article.tags">{{ item }}</span>
        </div>
    </article>
</template>
<style lang="scss" scoped>
.v-content-card {
    border-radius: 16px;
    padding: 24px;
    h3 {
        text-align: center;
        cursor: pointer;
        padding: 12px;
    }
    ul {
        padding-top: 12px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        span {
            padding-left: 4px;
        }
        li::after {
            content: "|";
            padding: 0 12px;
        }
        li:last-child::after {
            content: "";
        }
    }
    p {
        margin: 36px 0;
        line-height: 24px;
    }
    .v-card-tag {
        span {
            cursor: pointer;
            margin-left: 8px;
            border-radius: 4px;
            display: inline-block;
            padding: 6px 12px;
            border: 1px var(--v-bright-color) solid;
        }
    }
}
.v-content-card:hover {
    // transform-origin: 20% 0;
    // transform: rotateX(20deg);
    -webkit-transform: rotateX(10deg); /* Safari and Chrome */
    -webkit-transform-origin: 0 0; /* Safari and Chrome */
}
</style>
