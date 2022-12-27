// 根据滚动距离动态修改header背景透明度
export const setHeaderBg = (scrollHeight, asideDistanceFromFrame) => {
    const bgColor = document.body.style.getPropertyValue("--v-bg-menu-color");
    let bgColorArr = bgColor.split(", ");
    const height = scrollHeight / (scrollHeight + asideDistanceFromFrame) || 0;
    bgColorArr[bgColorArr.length - 1] = `${height})`;
    const color = bgColorArr.join(", ");
    document.body.style.setProperty("--v-bg-menu-color", color);

    if (asideDistanceFromFrame <= 200) {
        bgColorArr[bgColorArr.length - 1] = `0.8)`;
        const color = bgColorArr.join(", ");
        document.body.style.setProperty("--v-bg-menu-color", color);
    }
};
