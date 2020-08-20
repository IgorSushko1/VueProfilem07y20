<template>
  <div>
    <full-film-card v-if="getFilm()" :description-film="getFilm()" />
    <comments
      :key="JSON.stringify(comments)"
      :comment-info="comments"
      :this-user="user"
      @create-new-comment="createNewComment"
      @delete-comment="deleteComment"
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

  computed: {
    ...mapState(['film', 'comments', 'user']),
    user() {
      this.$store.dispatch('getComments', this.$route.params.id)
      return this.$store.state.user
    },
    comments() {
      return this.$store.state.comments
    },
  },
  created() {
    this.$store.dispatch('getFilm', this.$route.params.id)
    this.$store.dispatch('getComments', this.$route.params.id)
  },
  mounted() {},
  methods: {
    getFilm() {
      return this.$store.state.film
    },
    getComments() {},
    createNewComment(answer) {
      this.$store.dispatch('createComment', answer)
    },
    deleteComment(comment) {
      this.$store.dispatch('deleteComment', comment)
    },
  },
}
</script>