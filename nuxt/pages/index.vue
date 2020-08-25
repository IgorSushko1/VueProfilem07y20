<script>
import { mapState } from 'vuex';

import FilmCard from '~/components/FilmCard.vue';
import EmojiCard from '~/components/EmojiCard.vue';
import TvProgramm from '~/components/TVProgramm.vue';
import tvProgrammList from '~/static/tvProgramm.json';

export default {
  components: {
    FilmCard,
    EmojiCard,
    TvProgramm,
  },
  layout: 'default',

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
      filmList: [],
      changeTabs: ['Фильмы', 'Телеканалы'],
      tab: null,
    };
  },
  computed: {},
  updated() {},
  beforeCreate() {
    this.$store.dispatch('getFilms');
  },
  created() {},
  beforeMount() {},

  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="index-movie">
    <v-tabs
      v-model="tab"
      centered
      background-color="transparent"
      color="red"
      class="mt-2"
    >
      <v-tab
        v-for="item in changeTabs"
        :key="item"
        class="index-movie__header-switch-card"
      >
        {{ item }}
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-row class="mt-6">
            <span class="index-movie__header text font-weight-bold"
              >🔥 Новинки</span
            >
          </v-row>
          <v-row class="ma-0 pa-0">
            <film-card
              v-for="card in this.$store.state.films"
              :key="card._id"
              :image-name="card.picName"
              :film-description="card.description"
              :translated-name="card.translatedName"
              :page-link="card._id"
              class="mx-2"
            />
          </v-row>
          <v-row>
            <div class="index-movie__header font-weight-bold">
              Жанры
            </div>
          </v-row>
          <v-row class="index-movie__emoji ma-0">
            <emoji-card
              v-for="(smile, index) in emoji"
              :key="smile"
              :emoji-color="emojiColor[index]"
              :emoji-description="emojiDescription[index]"
              :get-smile="smile"
              class="ma-0"
            />
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-virtual-scroll
            id="style-3"
            :items="Object.values(tvProgrammList)"
            height="518"
            width="1180"
            item-height="170"
          >
            <template #default="{ item }">
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

<style lang="scss">
.index-movie {
  display: block;
  position: relative;
  max-width: 1180px;
  margin: auto;

  &__header-switch-card {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    font-stretch: 0.01;
    letter-spacing: 0.01px;
    text-transform: capitalize;
  }

  &__header {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: right;
    margin: 0 0 16px 24px;
  }

  &__emoji {
    justify-content: space-around;
  }
}
#style-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #bdbdbd;
  box-shadow: inset 0 0 6px #bdbdbd;
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
