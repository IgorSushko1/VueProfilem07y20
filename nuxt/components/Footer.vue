<style lang="scss" scoped>
.container-footer {
  background: #f2f2f2;
  height: 120px;
  margin: auto;
  width: 1440px;

  &__link {
    color: #1f4766;
    &:visited {
      color: #6b3ba1;
    }
  }

  &__for-image {
    position: relative;
    margin-left: 100px;
  }

  &__image {
    width: 32px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<template>
  <div>
    <v-card class="container-footer">
      <v-row>
        <v-col cols="1" class="pa-0 container-footer__for-image">
          <v-img
            src="/archer.png"
            class="container-footer__image ma-auto"
          ></v-img>
        </v-col>
        <v-col cols="9" class="text-left pl-0 ml-0">
          <div>
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
            246 (ДК «Металлург»)
          </div>
          <div>
            <a
              href="tel:+73412-93-88-61"
              class="ml-1 text-decoration-none container-footer__link"
            >
              +7 (3412) 93-88-61
            </a>
            <a
              href="tel:+73412-43-29-29"
              class="ml-3 text-decoration-none container-footer__link"
            >
              +7 (3412) 43-29-29
            </a>
          </div>
          <a
            href="https://htc-cs.ru"
            target="_blank"
            class="font-weight-bold container-footer__link text-decoration-none d-block"
          >
            htc-cs.ru
          </a>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.container-footer {
  background: #f2f2f2;
  height: 120px;
  margin: auto;
  width: 1440px;

  &__link {
    color: #1f4766;
    &:visited {
      color: #6b3ba1;
    }
  }

  &__for-image {
    position: relative;
    margin-left: 100px;
  }

  &__image {
    width: 32px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
