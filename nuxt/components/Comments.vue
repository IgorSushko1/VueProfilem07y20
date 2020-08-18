<style lang="scss" scoped>
.comments {
  border: none;
  width: 840px;

  &__text {
    width: 780px;
    min-height: 110px;
    background: #f2f2f2;
    border-radius: 8px;
    border: none;
  }
  &__form {
    width: auto;
    min-height: 110px;
    // background: #e5251e23;
    // opacity: 0.15;
    border-radius: 8px;
    border: none;
    color: black;
  }
  &__auth-decline {
    width: 780px;
    min-height: 110px;
    background: #e5251e23;
  }
  &__form-textarea {
    width: 780px;
    min-height: 110px;
    background: #e5251e23;
    // opacity: 0.15;
    border-radius: 8px;
    border: none;
    color: black;
  }
  &__form-button {
    background: #e5251e !important;
    text-transform: capitalize;
    font-size: 16px;
  }
  &__delete-button {
    display: block;
    // position: absolute;
    top: 0;
  }
}
</style>

<template>
  <div>
    <h2>Комментарии</h2>
    <v-form
      v-if="this.$store.state.user"
      ref="form"
      class="d-flex comments__form"
      @submit.prevent="submit"
    >
      <v-textarea
        v-model="newComment"
        class="comments__form-textarea form-control pa-4 pb-0"
        :auto-grow="autoGrow"
      ></v-textarea>
      <v-btn type="submit" color="success" class="comments__form-button ml-4">Опубликовать</v-btn>
    </v-form>
    <div v-else class="comments__auth-decline">Авторизуйтесь, чтобы добавить комментарий!</div>
    <!-- {{сommentInfo}} -- длинна массива -->
    {{this.$route.params.id}}
    {{this.$store.state.user}}
    <!-- {{this.$store.state.token}} -->
    <div v-if="commentInfo.length > 0">
      <v-card
        v-for="(comment, index) in commentInfo"
        :key="index"
        class="d-flex my-4 comments"
        outlined
      >
        <div class="comments__text flex-grow-1">
          <v-card-title>{{ comment.authorName }}</v-card-title>
          <v-card-text>{{ comment.comment }}</v-card-text>
        </div>

        <v-card-actions class="comments__delete-button ma-0 pa-0">
          <v-btn class="ma-0 pa-0" text>X</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else class="d-flex">Ваш комментарий будет первым!</div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      required: true,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      autoGrow: true,
      newComment: '',
    }
  },
  computed: {},
  methods: {
    submit() {
      const answer = {
        comment: this.newComment,
        filmLink: this.$route.params.id,
      }
      this.$emit('create-new-comment', answer)
    },
  },
}
</script>
