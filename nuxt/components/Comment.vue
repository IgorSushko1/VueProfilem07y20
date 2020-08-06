<style lang="scss" scoped>
.comment {
  width: 780px;
  min-height: 110px;
  background: #f2f2f2;
  border-radius: 8px;
}
</style>

<template>
  <v-card class="comment">
    <v-card-title>{{ commentsFormFilm().author }}</v-card-title>
    <v-card-text>{{ commentsFormFilm().comment }}</v-card-text>
    <v-card-actions>
      <v-btn>X</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { comment: {} }
  },
  computed: {},
  methods: {
    commentsFormFilm() {
      const answer = {}
      Object.keys(this.commentInfo).map((key) => {
        if (this.commentInfo[key] === 'Once Upon A Time In Hollywood') {
          answer.comment = this.commentInfo.comments['101'].comment
          answer.author = this.commentInfo.comments['101'].author
        }
      })
      return answer
    },
  },
}
</script>
