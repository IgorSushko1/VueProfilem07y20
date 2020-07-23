<style lang="scss">
.index-movie {
  &__header-switch-card {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 50px;
  }
  &__header-switch-card:hover {
    // border: ;
    // border-bottom: orangered;
    text-decoration: underline;
  }
}
</style>

<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>
    <v-row>
      <div class="index-movie__header-switch-card">Фильмы</div>
      <div class="index-movie__header-switch-card">Телканалы</div>
    </v-row>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in changeTabs" :key="item">
        {{ item }}
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-row>
            <span class="index-movie__header">🔥 Новинки </span>
          </v-row>
          <v-row class="ma-0 pa-0">
            <film-card
              v-for="(card, index) in listOfNews"
              :key="index"
              :image-name="card.picName"
              :film-description="card.description"
              :translated-name="card.translatedName"
            />
          </v-row>
          <v-row>
            <div class="index-movie__header">Жанры</div>
          </v-row>
          <v-row>
            <emoji-card
              v-for="(smile, index) in emoji"
              :key="index"
              :emoji-color="emojiColor[index]"
              :emoji-description="emojiDescription[index]"
              :get-smile="smile"
          /></v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
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
        </v-card>
      </v-tab-item>
    </v-tabs>
    <!-- <div>{{ tvProgrammList }}</div> -->
  </div>
</template>

<script>
import FilmCard from '~/components/FilmCard.vue'
import EmojiCard from '~/components/EmojiCard.vue'
import TvProgramm from '~/components/TVProgramm.vue'

import newsList from '~/static/newsList.json'
import tvProgrammList from '~/static/tvProgramm.json'

export default {
  layout: 'default',
  components: {
    FilmCard,
    EmojiCard,
    TvProgramm,
  },

  data() {
    return {
      name: 'World',
      emoji: ['happy', 'cry', 'ufo', 'chost'],
      emojiColor: [
        ['#f2c94c', '#f29a4a'],
        ['#F2994A', '#EB5757'],
        ['#56CCF2', '#2F80ED'],
        ['#828282', '#333333'],
      ],
      emojiDescription: ['Комедии', 'Драмы', 'Фантастика', 'Ужасы'],
      post: {},
      tvProgrammList,
      newsList,
      listOfNews: newsList,
      changeTabs: ['Фильмы', 'Телепрограмма'],
      listOfChannel: tvProgrammList,
      tab: null,
    }
  },
  methods: {
    async returnTv() {
      return await tvProgrammList
    },
    async updateMessage() {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      await this.$nextTick()
      console.log(this.$el.textContent) // => 'updated'
    },
  },
}
</script>
