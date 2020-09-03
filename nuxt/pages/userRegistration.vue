<script>
import userAuthForm from '~/components/UserAuthForm.vue';

export default {
  components: { userAuthForm },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    registerUser(userInfo) {
      this.$store.dispatch('registerUserv2', userInfo);
      this.$router.push('/userLogin');
    },
  },
};
</script>

<template>
  <div>
    <div>
      <user-auth-form
        type-of-form="registration"
        button-text="Зарегистрироваться"
        @register="registerUser"
      />
    </div>
  </div>
</template>
