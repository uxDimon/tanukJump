<template>
    <div class="progres__wrap">
        <div class="progres">
            <div class="progres__scale">
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
                <div class="progres__scale-item"></div>
            </div>
            <div class="progres__colb">
                <div
                    class="progres__zhizha"
                    :style="{ clipPath: `inset(${100 - fillPprogres}% 0 0 0)` }"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        fillPprogres: {
            type: Number,
            default: 0,
        },
    },
};
</script>
<style lang="scss">
.progres__wrap {
    position: absolute;
    left: 0;
    top: calc(50% - 50px);
    padding: 10px;
    transform: translateY(-50%);
    background: linear-gradient(180deg, #181836 0%, #323251 100%);
    box-shadow: 0px 2px 0px #181836;
    border-radius: 0px 20px 20px 0px;
    z-index: 1;
}

.progres {
    width: 24px;
    height: 276px;
    border-radius: 45px;
    overflow: hidden;
}

.progres__scale {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 0px;
    height: inherit;
    z-index: 3;
}

.progres__scale-item {
    width: 12px;
    height: 3px;
    background: rgba(255, 255, 255, 0.5);
}

.progres__colb {
    position: absolute;
    top: 10px;
    left: 10px;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.01);
    box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.8);
    z-index: 2;
}

.progres__zhizha {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        #ff0050 0%,
        #ff9900 48.04%,
        #73df52 100%
    );
    z-index: 1;
    clip-path: inset(0 0 0 0);
}
</style>