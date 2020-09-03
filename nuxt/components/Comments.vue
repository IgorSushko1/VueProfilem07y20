
<script>
import { mapState } from 'vuex'

export default {
    props: {
        commentInfo: {
            type: Array,
            required: true,
            default: () => {
                return []
            },
        },
        thisUser: {
            type: String,
            required: false,
            default: undefined,
        },
    },
    emits: {
        'create-new-comment': null,
        'delete-comment': null,
    },
    data() {
        return {
            autoGrow: true,
            newComment: '',
            canDelete: false,
            updatedUser: 0,
        }
    },
    computed: {
        ...mapState(['user']),
        user() {
            return this.$store.state.user
        },
    },
    afterMounted() {},
    mounted() {},
    methods: {
        submit() {
            const answer = {
                comment: this.newComment,
                filmLink: this.$route.params.id,
            }
            this.$emit('create-new-comment', answer)
        },
        deleteComment(comment) {
            this.$emit('delete-comment', comment)
        },
    },
}
</script>

<template>
  <div class="comments__container">
    <h2 class="comments__header">
      Комментарии
    </h2>
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
      />
      <v-btn type="submit" color="success" class="comments__form-button ml-4">
        Опубликовать
      </v-btn>
    </v-form>

    <div v-else class="comments__auth-decline">
      Авторизуйтесь, чтобы добавить комментарий!
    </div>
    <div
      v-if="commentInfo.length > 0"
      class="comments__comments-list"
    >
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
          <v-btn
            v-if="comment.authorName === thisUser"
            class="ma-0 pa-0"
            text
            @click="deleteComment(comment)"
          >
            X
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h2 v-else class="comments__header">
      Ваш комментарий будет первым!
    </h2>
  </div>
</template>


<style lang="scss" scoped>
.comments {
    border: none;
    width: 840px;

    &__container {
        display: flex;
    flex-direction: column;
    }

    &__header {
        text-align: center;
    margin: 25px 0px 10px;
    }

    &__text {
        width: 780px;
        min-height: 110px;
        background: #f2f2f2;
        border-radius: 8px;
        border: none;
    }

    &__form {
        width: 1012px;
        place-self: flex-end;
        min-height: 110px;
        border-radius: 8px;
        border: none;
        color: black;
    }
    &__auth-decline {
        width: 840px;
        align-self: center;
        text-align: center;
        padding-top: 4%;
        min-height: 110px;
        background: #e5251e23;
    }
    &__form-textarea {
        width: 780px;
        min-height: 110px;
        background: #e5251e23;
        border-radius: 8px;
        border: none;
        color: black;
    }

    &__form-button {
        background: #e5251e !important;
        text-transform: capitalize;
        font-size: 16px;
    }

    &__comments-list {
        align-self: center;
        margin-bottom: 25px;
    }
    &__delete-button {
        display: block;
        top: 0;
    }
}
</style>

