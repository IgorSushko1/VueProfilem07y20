/* eslint-disable vue/return-in-computed-property */
<script>
import { mapState } from 'vuex';

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
      text: 'Поиск...',
      buttonTexts: 'Найти',
      searchQuery: '',
      searchAnswer: [],
      searchKey: false,
      downloadKey: false,
      raised: true,
      text: true
    };
  },
  computed: {
    ...mapState(['searchResponse']),
    searchResponse() {
      this.searchKey = true;
      return this.$store.state.searchResponse;
    },
  },
  watch: {},
  methods: {
    async sendSearchQuery() {
      if (this.searchQuery !== '') {
      this.searchKey = true;
        await this.$store.dispatch('findFilms', this.searchQuery);
        this.searchQuery = ''
      }
    },
    onClickOutside() {
      this.searchKey = false;
    },
  },
};
</script>

<template>
  <v-form
    ref="form"
    class="container__v-form"
    @submit.prevent="sendSearchQuery"
  >
    <v-text-field
      v-model="searchQuery"
      label="Поиск..."
      class="container__v-text-field pr-6 pt-0"
    />
    <v-btn :text="text" type="submit" class="container__search-button ma-2">
      Найти
    </v-btn>

    <v-list
      v-if="searchKey"
      v-click-outside="onClickOutside"
      class="container__v-list"
    >
      <v-list-item
        v-for="n in searchResponse"
        :key="n._id"
        class="container__v-list-item"
      >
        <nuxt-link class="container__nuxt-link" :to="'/aboutFilm/' + n._id" @click="onClickOutside">
          <v-list-item-title
            class="container__v-list-item-title"
            v-text="n.translatedName"
          />
          <v-list-item-subtitle
            class="container__v-list-item-text"
            v-text="n.description"
          />
        </nuxt-link>
      </v-list-item>
    </v-list>
  </v-form>
</template>

<style lang="scss" scoped>
.container {
  &__v-form {
    display: flex;
    width: 450px;
  }

  &__v-text-field {
    height: 25px;
    margin: 0;
  }

  &__search-button {
      color: #E5261E;
      text-transform: capitalize;
      font-size: 18px;
  }

  &__nuxt-link {
      text-decoration: none;
  }

  &__v-list {
    position: absolute;
    top: 100px;
    width: 440px;
    height: auto;
    z-index: 6;
    padding: 0;
    background-color: white;

    &-item {
      display: flex;
      flex-direction: column;

      &-title {
        padding: 15px;
      }
      &-text {
        white-space: normal;
      }
    }
  }
}
</style>
