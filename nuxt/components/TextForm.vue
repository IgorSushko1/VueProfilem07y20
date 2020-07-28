<style lang="scss">
.container__v-form {
  display: flex;
  width: 450px;
}
.container__v-text-field {
  height: 25px;
  margin: 0;
  // padding: 0 30px 0 0;
}
</style>

<template>
  <v-form ref="form" class="container__v-form" lazy-validation>
    <v-text-field
      :counter="10"
      :label="text"
      required
      class="container__v-text-field pr-6 pt-0"
    ></v-text-field>
    <div v-if="needButton">
      <v-btn
        exact-active-class=""
        depressed
        color="#e5261e"
        class="mr-8 container__button"
        @click="find"
        >{{ buttonTexts }}</v-btn
      >
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    needButton: {
      type: Boolean,
      required: false,
    },
    buttonText: {
      default: 'true',
      type: String,
      required: false,
    },
  },
  data() {
    return {
      // needButton: true,
      text: 'Поиск...',
      buttonTexts: 'Найти',
    }
  },
  methods: {
    find() {
      console.log('Отправка сообщения на поиск')
    },
  },
}
</script>
