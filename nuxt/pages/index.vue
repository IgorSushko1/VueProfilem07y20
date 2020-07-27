<style lang="scss" scoped>
#style-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #bdbdbd;
  background-color: #f5f5f5;
  border-radius: 10px;
}

#style-3::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #bdbdbd;
  border-radius: 10px;
}
</style>

<template>
  <v-layout column justify-center align-center>
    <nuxt-link to="/app">APP</nuxt-link>
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
      v-for="(card, name, index) in listOfNews"
      :key="index"
      :image-name="card.picName"
      :film-description="card.description"
      :translated-name="card.translatedName"
    />
    <v-virtual-scroll
      id="style-3"
      :items="Object.values(listOfChannel)"
      height="518"
      width="1180"
      item-height="170"
    >
      <template v-slot="{ item }">
        <v-list-item :key="item">
          <v-list-item-content>
            <tv-programm
              :key="item.name"
              :tv-channel-name="item.name"
              :tv-channel-image="item.image"
              :tv-channel-programm="item.programms"
            />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <full-film-card
      v-for="(obj, name, index) in Object.values(listOfNews)"
      :key="index"
      :description-film="obj"
      :image-name="obj.picName"
    />
    <div v-for="(obj, name, index) in Object.values(listOfNews)" :key="index">
      <comment-card :comment-info="obj" />
    </div>

    <nuxt-link to="/indexMovie">Home page</nuxt-link>
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
import TvProgramm from '~/components/TVProgramm.vue'
import FullFilmCard from '~/components/FullFilmCard.vue'
import CommentCard from '~/components/Comment.vue'

import newsList from '~/static/newsList.json'
import tvProgrammList from '~/static/tvProgramm.json'

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
    TvProgramm,
    FullFilmCard,
    CommentCard,
  },
  data() {
    return {
      needButton: true,
      emoji: ['chost', 'happy', 'ufo', 'cry'],
      emojiColor: [
        ['#828282', '#333333'],
        ['#f2c94c', '#f29a4a'],
        ['#56CCF2', '#2F80ED'],
        ['#F2994', '#EB5757'],
      ],
      poster: 'Hustlers.png',
      description: 'Some description',
      filmName: 'Бэтмен',
      listOfNews: newsList,
      listOfChannel: tvProgrammList,
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
