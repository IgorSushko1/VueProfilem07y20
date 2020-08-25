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
    pageLink: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      overlay: false,
      nuxt: true,
    };
  },
  computed: {
    posterImage() {
      const name = this.imageName ? this.imageName : 'Batman.png';
      return '/posters/' + name;
    },
    filmDescriptionOnCard() {
      return this.filmDescription
        ? this.filmDescription
        : 'Top 10 Australian beaches';
    },
    cardsTitle() {
      return this.translatedName
        ? this.translatedName
        : 'Заполни название карточки';
    },
    toLink() {
      return `aboutFilm/${this.pageLink}`;
    },
  },
  methods: {
    linkV() {
      this.$router.push(`/aboutFilm/${this.pageLink}`);
    },
  },
};
</script>

<template>
  <nuxt-link :to="toLink">
    <v-card max-width="280" outlined class="mx-1 film-card">
      <!-- <v-card max-width="280" outlined class="mx-1 film-card" link @click="linkV"> -->
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
              <v-overlay v-if="hover" absolute color="#333333">
                <v-card-text class="d-block">
                  {{ filmDescriptionOnCard }}
                </v-card-text>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <v-card-title>{{ cardsTitle }}</v-card-title>
    </v-card>
  </nuxt-link>
</template>
<style lang="scss">
.film-card {
  border: none !important;
}
</style>
