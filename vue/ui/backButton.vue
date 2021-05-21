<template>
    <a :href="urlLinc" class="back-button">
        <icon-back></icon-back>
    </a>
</template>
<script>
import iconBack from "../icon/back.vue";
export default {
    components: {
        iconBack,
    },
    props: {
        urlLinc: {
            type: String,
            default: "#",
        },
    },
};
</script>
<style lang="scss">
$font-primary: "Geometria", sans-serif;
$font-number: "Quantico", sans-serif;

.back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    border: none;
    background: linear-gradient(180deg, #cf0706 0%, #fb4d4f 100%);
    box-shadow: 0px 4px 0px #181836;
    border-radius: 90px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    position: relative;

    &:active {
        background: #cf0706;
    }
    &[disabled] {
        background: linear-gradient(180deg, #535353 0%, #8d8d8d 100%);
    }

    > svg {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>