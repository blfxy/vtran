<script setup>
import { ref, onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
const menu = ref([
    {
        title: "目录",
        key: "dir",
    },
    {
        title: "vtran",
        key: "me",
    },
    {
        title: "标签",
        key: "tag",
    },
]);
const curMenu = ref("me");
const handleMenu = (item) => {
    curMenu.value = item.key;
};
onMounted(() => {});
</script>
<template>
    <!-- 左侧菜单距离窗口小于等于0时固定左侧菜单 -->
    <div
        :class="
            counter.asideHeight + counter.asideDistanceFromFrame < 20
                ? 'fix-aside-menu'
                : ''
        "
        class="v-aside d-l-b-bg txt-color txt-size"
    >
        <ul class="v-aside-menu">
            <li
                :class="curMenu === item.key ? 'active txt-bright-color ' : ''"
                v-for="item in menu"
                @click="handleMenu(item)"
            >
                {{ item.title }}
            </li>
        </ul>
        <template v-if="curMenu === 'me'">
            <div class="v-aside-me">
                <div class="aside-logo"></div>
                <p>菩提本无树，明镜亦非台，本来无一物，何处然尘埃。</p>
                <div class="aside-statistics">
                    <ul>
                        <li>34</li>
                        <li>文章</li>
                    </ul>
                    <ul>
                        <li>10</li>
                        <li>分类</li>
                    </ul>
                    <ul>
                        <li>20</li>
                        <li>标签</li>
                    </ul>
                </div>

                <ul class="aside-about">
                    <li>
                        <font-awesome-icon icon="fa-brands fa-github" />
                        <span>GitHub</span>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <span>Email</span>
                    </li>
                </ul>
            </div>
        </template>
        <template v-if="curMenu === 'dir'">
            <div class="v-aside-dir">000</div>
        </template>
        <template v-if="curMenu === 'tag'">
            <div class="v-aside-tag">000</div>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.v-aside {
    width: 240px;
    box-sizing: border-box;
    margin-bottom: 24px;
    padding: 24px;
    border-radius: 12px;
    .v-aside-menu {
        display: flex;
        justify-content: space-between;
        li {
            cursor: pointer;
            padding-bottom: 12px;
        }
        .active {
            border-bottom: 2px solid var(--v-txt-bright-color);
        }
    }

    .v-aside-me {
        .aside-logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 12px auto;
            background-image: url("@/assets/imgs/me01.jpeg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        p {
            font-size: 16px;
            text-align: center;
            margin: 24px 0;
        }
        .aside-statistics {
            display: flex;
            justify-content: center;
            align-items: center;
            ul {
                padding: 0 12px;
                border-right: 1px solid var(--v-bg-deep-color);
                li {
                    text-align: center;
                }
                li:first-child {
                    font-weight: bolder;
                    padding-bottom: 12px;
                }
            }
            ul:last-child {
                border: none;
            }
        }
    }
    .aside-about {
        padding-top: 24px;
        display: flex;
        flex-wrap: wrap;
        li {
            min-width: 50%;
            margin-bottom: 12px;
            cursor: pointer;
            text-align: center;
            span {
                padding-left: 6px;
            }
        }
    }
}
.fix-aside-menu {
    position: fixed;
    top: 20px;
}
</style>
