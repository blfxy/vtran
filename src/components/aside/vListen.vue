<script setup>
import { ref } from "vue";
let visbleSearch = ref(false);
let searchRef = ref(null);
const handleSearch = () => {
    visbleSearch.value = true;
    searchRef.value.focus();
};
</script>
<template>
    <div class="v-aside txt-color txt-size">
        <div class="v-aside-listen deep-bg">
            <h3 class="card-title-txt-size">卿听吾语</h3>
            <p>菩提本无树，明镜亦非台，本来无一物，何处然尘埃。</p>
        </div>
        <div class="v-aside-search-box light-bg">
            <div
                class="v-aside-search light-bg"
                :class="
                    visbleSearch ? 'v-active v-active-shadow' : 'v-inactive'
                "
            >
                <span class="v-hover" @click="handleSearch">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']"
                        >000</font-awesome-icon
                    >
                    搜索啥呢。。。
                </span>
                <input
                    class="txt-color"
                    ref="searchRef"
                    @blur="visbleSearch = false"
                    :placeholder="visbleSearch ? '搜索什么...' : ''"
                    type="text"
                    autocomplete="off"
                />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.v-aside {
    margin-bottom: 24px;
    padding: 24px;
    padding: 0;
    .v-aside-listen {
        padding: 24px;
        border-radius: 12px 12px 0 0;
        h3 {
            text-align: center;
            margin-bottom: 24px;
        }
    }
    .v-aside-search-box {
        padding: 24px;
        border-radius: 0 0 12px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        .v-aside-search {
            height: 32px;
            width: 160px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                position: absolute;
                width: 100%;
                height: 100%;
                line-height: 32px;
                display: inline-block;
                text-align: center;
                cursor: pointer;
            }
            input {
                display: inline-block;
                background: none;
                outline-style: none;
                border: 0;
                padding: 0 12px;
                height: 100%;
                width: 100%;
            }
        }
        .v-active {
            position: absolute;
            animation: showSearch 0.3s, active-bg 0.3s;
            border-radius: 6px;
            width: 216px;
            height: 42px;
            span {
                display: none;
            }
        }
        .v-inactive {
            animation: hideSearch 0.3s, inactive-bg 0.3s;
        }
    }
}
@keyframes hideSearch {
    from {
        width: 216px;
        height: 42px;
        border-radius: 6px;
    }
    to {
        width: 160px;
        height: 32px;
        border-radius: 0;
    }
}
@keyframes showSearch {
    from {
        width: 160px;
        height: 32px;
        border-radius: 0;
    }
    to {
        width: 216px;
        height: 42px;
        border-radius: 6px;
    }
}
</style>
