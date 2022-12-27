<script setup>
import { ref, reactive } from "vue";
import vContentCard from "@/components/content/vContentCard.vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>
<template>
    <div class="v-home">
        <template v-for="article in counter.articleList">
            <v-content-card :article="article"></v-content-card>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.v-home {
    .v-content-card {
        margin-bottom: 24px;
    }
}
</style>
