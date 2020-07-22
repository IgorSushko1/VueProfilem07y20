<style lang="scss" scoped>
.programm {
  width: 1180px;
  height: 162px;

  background: #f2f2f2;
  border-radius: 8px;

  &__no-border {
    border: none;
  }

  &__image {
    width: 400px;
  }

  &__flex-container {
    display: flex;
    justify-content: center;
  }

  &__time,
  &__description {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  &__time {
    width: 50px;
  }

  &__description {
    width: 500px;
  }

  &__red {
    color: red;
  }
}
</style>

<template>
  <v-card class="d-flex programm programm__no-border" outlined>
    <v-container class="programm__image">
      <v-col class="programm__flex-container">
        <img :src="tvImage" :alt="'логотип ' + tvChannelName" />
      </v-col>
    </v-container>
    <div>
      <v-card-title class="pl-0 pb-2 font-weight-bold">{{
        tvChannelName
      }}</v-card-title>
      <v-container
        v-for="(programm, index) in tvChannelProgramm"
        :key="index"
        class="ma-0 pa-0"
      >
        <v-col class="pa-1">
          <div :class="needRedStyle(index) + ' ma-0 pa-0 programm__time'">
            {{ programm.time }}
          </div>
        </v-col>
        <v-col class="pa-0">
          <div
            :class="needRedStyle(index) + ' ma-0 pa-0 programm__description'"
          >
            {{ programm.tvShow }}
          </div>
        </v-col>
      </v-container>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    tvChannelName: {
      type: String,
      required: true,
    },
    tvChannelImage: {
      type: String,
      required: true,
    },
    tvChannelProgramm: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      indexForClass: 0,
    }
  },
  computed: {
    tvImage() {
      return '/tvIcons/' + this.tvChannelImage
    },
  },
  methods: {
    needRedStyle(index) {
      return index === 0 ? 'programm__red' : ''
    },
  },
}
</script>
