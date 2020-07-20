<style scoped lang="scss">
.container__header {
  display: flex;
  // width: 1000px;
  align-items: center;
}
.container__button {
  width: 130px;
  height: 38px;
  transition: background-color 0.5s ease;
  background: #e5261e;
  border-radius: 4px;
  border: none;
  color: white;
}

.container__button:hover {
  background: #cc221b;
  cursor: pointer;
}
</style>

<template>
  <div class="container__header">
    <logo-video-service />
    <text-form :need-button="needButton" />
    <button-v class="container__button" />
  </div>
</template>

<script>
import LogoVideoService from './LogoVideoService/LogoVideoService.vue'
import TextForm from './TextForm'
import ButtonV from './Button'
export default {
  components: {
    LogoVideoService,
    TextForm,
    ButtonV,
  },
  props: {
    needButton: {
      type: Boolean,
      require: true,
    },
  },
}
</script>
