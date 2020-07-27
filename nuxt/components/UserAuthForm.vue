<template>
  <v-from v-model="valid">
    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <f-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'), minLength('password', 8)]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
      buttonText
    }}</v-btn>
  </v-from>
</template>

<script>
// import validations from '@/utils/validations'

export default {
  props: {
    submitForm: { type: Function, default() {} },
    buttonText: { type: String, default: '' },
    hasName: { type: Boolean, default: false },
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: '',
      },
      // ...validations,
    }
  },
}
</script>
