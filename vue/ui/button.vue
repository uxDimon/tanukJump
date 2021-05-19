<template>
    <button class="button-g" :disabled="disabled">{{ name }}</button>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: "Выбрать",
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
};
</script>
<style lang="scss">
$font-primary: "Geometria", sans-serif;
$font-number: "Quantico", sans-serif;

.button-g {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 20px 18px;
    margin: 0;
    border: none;
    background: linear-gradient(180deg, #cf0706 0%, #fb4d4f 100%);
    box-shadow: 0px 4px 0px #181836;
    border-radius: 90px;
    font-family: $font-primary;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;

    &:active {
        background: #cf0706;
    }
    &[disabled] {
        background: #2e2e2e0e;
        color: grey;
    }
}
</style>
