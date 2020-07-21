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
    <footer-v />
    <film-card
      v-for="(card, index) in listOfNews"
      :key="index"
      :image-name="card.picName"
      :film-description="card.description"
      :translated-name="card.translatedName"
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
import FooterV from '~/components/Footer.vue'
import FilmCard from '~/components/FilmCard.vue'

import newsList from '~/static/newsList.json'

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
    FooterV,
    FilmCard,
  },
  data() {
    return {
      needButton: true,
      emoji: ['chost', 'happy', 'ufo', 'cry'],
      poster: 'Hustlers.png',
      description: 'Some description',
      filmName: 'Бэтмен',
      listOfNews: newsList,
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
