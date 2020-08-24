
<template>
  <v-card class="mx-2 mb-12 container" :style="chooseColor" link>
    <img :src="chooseSmile" alt class="container__image">
    <p class="container__text">
      {{ emojiDescription }}
    </p>
  </v-card>
</template>

<script>
export default {
    props: {
        getSmile: {
            type: String,
            require: true,
            default: '',
        },
        emojiColor: {
            type: Array,
            require: true,
            default() {
                return [];
            },
        },
        emojiDescription: {
            type: String,
            require: true,
            default: '',
        },
    },
    data() {
        return {};
    },
    computed: {
        chooseSmile() {
            return '/' + this.getSmile + '.png';
        },
        chooseColor() {
            return (
                'background: linear-gradient(96deg, ' +
                this.emojiColor[0] +
                ', ' +
                this.emojiColor[1] +
                ' )'
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 280px;
    height: 208px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.15);

    &__image {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &__text {
        position: absolute;
        bottom: 20px;
        color: white;
    }
}

.container:hover {
    opacity: 0.8;
}
</style>

