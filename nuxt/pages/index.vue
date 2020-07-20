<template>
  <v-layout column justify-center align-center>
    <logo-video-service />
    <buttonV></buttonV>
    <text-form />
    <check-box-boolean />
    <header-v :need-button="needButton" />
    <emoji-card
      v-for="(smile, index) in emoji"
      :key="index"
      :get-smile="smile"
    />
  </v-layout>
</template>

<script>
import Vue from 'vue'
import LogoVideoService from '~/components/LogoVideoService/LogoVideoService.vue'
import ButtonV from '~/components/Button.vue'
import TextForm from '~/components/TextForm.vue'
import CheckBoxBoolean from '~/components/CheckBoxBoolean.vue'
import HeaderV from '~/components/Header.vue'
import EmojiCard from '~/components/EmojiCard.vue'

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div>{{premium}}</div>
  `,
})

export default {
  components: {
    LogoVideoService,
    ButtonV,
    TextForm,
    CheckBoxBoolean,
    HeaderV,
    EmojiCard,
  },
  data() {
    return {
      needButton: true,
      emoji: ['chost', 'happy', 'ufo', 'cry'],
    }
  },
  computed: {
    header() {
      return 1
    },
  },
  methods: {
    handleAddCard() {},
  },
}
</script>
