<style lang="scss" scoped>
.film-card {
  height: 370px;
  width: 984px;
  border: none;

  &__image-container {
    max-width: 280px;
    display: contents;
  }
  &__image {
    border-radius: 8px;
  }
}
</style>

<template>
  <v-card class="d-flex film-card" outlined>
    <v-row>
      <v-col class="film-card__image-container">
        <!-- Колонка 1 -->
        <img :src="posterImage" alt />
      </v-col>
      <v-col class="ml-10">
        <v-row>
          <v-col cols="2">Название</v-col>
          <v-col cols="10">{{ descriptionFilm.translatedName }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2">Страна</v-col>
          <v-col cols="10">{{ descriptionFilm.country }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="2">Жанр</v-col>
          <v-col cols="10">{{ descriptionFilm.genre }}</v-col>
        </v-row>
        <v-row>
          <v-col>{{ descriptionFilm.description }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    descriptionFilm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    posterImage() {
      const name = this.descriptionFilm.picName
        ? this.descriptionFilm.picName
        : 'Batman.png'
      return '/posters/' + name
    },
  },
  methods: {},
}
</script>
