<template>
  <button class="container__button">
    Войти
  </button>
</template>

<style lang="scss" scoped>
.container__button {
    width: 130px;
    height: 38px;
    transition: background-color 0.5s ease;
    background: #e5261e;
    border-radius: 4px;
    border: none;
    color: white;
}

.container__button:hover {
    background: #cc221b;
    cursor: pointer;
}
</style>