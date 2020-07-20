<style lang="scss">
.container__v-form {
  display: flex;
}
.container__v-text-field {
  width: 320px;
  height: 25px;
  margin: 0;
  padding: 0;
}
</style>

<template>
  <v-form ref="form" v-model="valid" class="container__v-form" lazy-validation>
    <v-text-field
      :counter="10"
      :label="text"
      required
      class="container__v-text-field"
    ></v-text-field>
    <div v-if="needButton">
      <v-btn
        exact-active-class=""
        depressed="true"
        text="true"
        color="#e5261e"
        class="mr-4 container__button"
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
