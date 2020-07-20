<style lang="scss" scoped>
.container {
  width: 280px;
  height: 208px;
  border-radius: 6px;
  background: linear-gradient(96deg, #f2c84ce1, #f29a4ae1);
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
  background: linear-gradient(96deg, #f2c94c, #f29a4a);
}
</style>

<template>
  <div class="container">
    <img :src="chooseSmile" alt="" class="container__image" />
    <p class="container__text">Комедии</p>
  </div>
</template>

<script>
export default {
  props: {
    getSmile: {
      type: String,
      require: true,
    },
  },
  computed: {
    chooseSmile() {
      return '/' + this.getSmile + '.png'
    },
  },
}
</script>
