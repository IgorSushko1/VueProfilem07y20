<template>
  <v-card class="mx-auto" max-width="280">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="280">
          <v-img
            class="white--text align-end"
            height="370px"
            :src="posterImage"
          >
            <!-- <v-card-text>{{ filmDescriptionOnCard }}</v-card-text> -->
          </v-img>
          <v-fade-transition height="370px">
            <v-overlay v-if="hover" absolute color="#333333" :opacity="0.8">
              <v-card-text class="d-block">{{
                filmDescriptionOnCard
              }}</v-card-text>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
    <v-card-title>{{ cardsTitle }} </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
    filmDescription: {
      type: String,
      required: true,
    },
    translatedName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // imageName: '',
      overlay: false,
    }
  },
  computed: {
    posterImage() {
      const name = this.imageName ? this.imageName : 'Batman.png'
      return '/posters/' + name
    },
    filmDescriptionOnCard() {
      return this.filmDescription
        ? this.filmDescription
        : 'Top 10 Australian beaches'
    },
    cardsTitle() {
      return this.translatedName
        ? this.translatedName
        : 'Заполни название карточки'
    },
  },
}
</script>
