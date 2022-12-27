<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { setHeaderBg } from "@/utils/index.js";
const counter = useCounterStore();
const router = useRouter();
const menu = ref([
    {
        name: "文章",
        link: "/",
        icon: ["fas", "pen"],
    },
    {
        name: "关于",
        link: "",
        icon: ["fas", "user"],
    },
    {
        name: "专题",
        link: "",
        icon: ["fas", "folder"],
    },
    {
        name: "学习地图",
        link: "",
        icon: ["fas", "location-dot"],
    },
    {
        name: "友人帐",
        link: "",
        icon: ["fas", "link"],
    },
    {
        name: "留言版",
        link: "",
        icon: ["fas", "comment"],
    },
]);
let visbleSearch = ref(false);
let searchRef = ref(null);
const handleSearch = () => {
    visbleSearch.value = !visbleSearch.value;
    searchRef.value.focus();
};
const setHeaderClass = () => {
    const height = counter.asideHeight + counter.asideDistanceFromFrame;
    // body滚动修改header背景透明度
    setHeaderBg(counter.scrollHeight, counter.asideDistanceFromFrame);
    if (height <= 0) {
        return "hide-header";
    } else {
        return "show-header";
    }
};
const handleMenu = (menu) => {
    router.push({
        path: menu.link,
    });
};
</script>
<template>
    <header :class="setHeaderClass()" class="vtran-header menu-bg">
        <div class="vtran-header-box txt-color menu-txt-size v-width">
            <div class="v-header-logo logo-size">vtran</div>
            <div class="v-header-menu">
                <ul class="menu">
                    <li
                        @click="() => handleMenu(item)"
                        class="v-hover"
                        v-for="item in menu"
                    >
                        <font-awesome-icon :icon="item.icon" />
                        <span>{{ item?.name }} </span>
                    </li>
                </ul>
                <div
                    :class="
                        visbleSearch ? 'menu-search v-active' : 'menu-search'
                    "
                >
                    <font-awesome-icon
                        class="search v-hover"
                        @click="handleSearch"
                        :icon="['fas', 'magnifying-glass']"
                    />
                    <input
                        class="txt-color"
                        ref="searchRef"
                        @blur="visbleSearch = false"
                        placeholder="搜索什么..."
                        type="text"
                        autocomplete="off"
                    />
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.vtran-header {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    .v-header-logo {
        font-family: MaShanZheng-Regular;
        cursor: pointer;
    }
    .vtran-header-box {
        box-sizing: border-box;
        font-weight: 600;
        margin: 0 auto;
        height: 64px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .v-header-menu {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;
            .menu {
                padding-left: 2rem;
                height: 100%;
                margin: 0;
                display: flex;
                align-items: center;
                li {
                    padding: 1.6rem;
                    cursor: pointer;
                    span {
                        padding-left: 0.5rem;
                    }
                }
            }
            .menu-search {
                border-radius: 4px;
                display: flex;
                align-items: center;
                animation: menu-inactive-bg 0.2s;
                .search {
                    padding: 0 12px;
                    cursor: pointer;
                }
                input {
                    display: inline-block;
                    height: 36px;
                    background: none;
                    outline-style: none;
                    border: 0;
                    width: 0;
                    padding: 0;
                    animation: hide-search 0.3s;
                }
            }
            .v-active {
                animation: menu-active-bg 0.6s;
                input {
                    width: 200px;
                    animation: show-search 0.6s;
                }
            }
        }
    }
}
.show-header {
    animation: show-header 1s;
}
.hide-header {
    transform: translateY(-64px);
    animation: hide-header 1s;
}
@keyframes hide-search {
    from {
        width: 200px;
    }
    to {
        width: 0px;
    }
}
@keyframes show-search {
    from {
        width: 0px;
    }
    to {
        width: 200px;
    }
}
@keyframes hide-header {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-64px);
    }
}
@keyframes show-header {
    from {
        transform: translateY(-64px);
    }
    to {
        transform: translateY(0px);
    }
}
</style>
