<template>
  <div>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img src="/archer.png"></v-img>
        </v-col>
        <v-col cols="auto" class="text-left pl-2">
          <div>
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
            246 (ДК «Металлург»)
          </div>
          <div>
            <a href="tel:+73412-93-88-61" class="ml-1 text-decoration-none">
              +7 (3412) 93-88-61
            </a>
            <a href="tel:+73412-43-29-29" class="ml-3 text-decoration-none">
              +7 (3412) 43-29-29
            </a>
          </div>
          <a
            href="https://htc-cs.ru"
            target="_blank"
            class="font-weight-bold container__link text-decoration-none d-block"
          >
            htc-cs.ru
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.container {
  &__link {
    color: #1f4766;
    &:visited {
      color: #6b3ba1;
    }
  }
}
</style>
