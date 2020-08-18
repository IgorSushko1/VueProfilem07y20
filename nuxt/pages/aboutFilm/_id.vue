<template>
  <div>
    <full-film-card v-if="getFilm()" :description-film="getFilm()" />
    <comments
      v-if="getComments()"
      :comment-info="getComments()"
      @create-new-comment="createNewComment"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FullFilmCard from '~/components/FullFilmCard.vue'
import Comments from '~/components/Comments.vue'

export default {
  layout: 'default',
  components: {
    FullFilmCard,
    Comments,
  },

  data() {
    return {}
  },

  computed: { ...mapState(['films', 'comments']) },
  created() {
    this.$store.dispatch('getFilms')
    this.$store.dispatch('getComments', this.$route.params.id)
  },
  mounted() {},
  methods: {
    getFilm() {
      return this.$store.state.films.filter((el) => {
        return el._id === this.$route.params.id
      })[0]
    },
    getComments() {
      return this.$store.state.comments
    },
    createNewComment(answer) {
      this.$store.dispatch('createComment', answer)
    },
  },
}
</script>