<template>
  <q-page padding>
    <q-form @submit.prevent="handleRegister">
      <div class="row justify-center">
        <p class="col-12 text-h4 text-center">Register</p>
        <div class="col-md-4 col-sm-6 col-xs-10">

          <q-input
        label="Name"
        v-model="form.name"
        lazy-rules=""
        :rules="[val => (val.length > 0) || 'Name is required']"
        color="secondary"
        />

        <q-input
        label="Email"
        v-model="form.email"
        lazy-rules=""
        :rules="[val => (val && val.length > 0) || 'Email is required']"
        type="email"
        color="secondary"
        />

        <q-input
          label="Password"
          v-model="form.password"
          lazy-rules=""
          :rules="[val => (val && val.length >= 6) || 'Password is required and 6 characters']"
          type="password"
          color="secondary"
          />

          <div class="full-width q-pt-md">
            <q-btn
            label="Register"
            color="secondary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
            />

            <q-btn
              label="back"
              color="darck"
              class="full-width"
              rounded
              flat
              :to="{name: 'login'}"
              />
          </div>

    </div>
  </div>
  </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useNotify from 'src/composables/UseNotify'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RegisterPage',

  setup () {
    const router = useRouter()

    const { register } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })
    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }
    return {
      form,
      handleRegister
    }
  }
})
</script>
