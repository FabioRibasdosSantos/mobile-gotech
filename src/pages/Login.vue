<template>
<q-page padding>
  <q-form @submit.prevent="handleLogin">
    <div class="row justify-center q-gutter-y-sm">
      <p class="col-12 text-h4 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
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
        :rules="[val => (val && val.length >= 6) || 'Password is required']"
        type="password"
        color="secondary"
        />

        <div class="full-width q-pt-md">
          <q-btn
          label="Login"
          color="secondary"
          class="full-width"
          outline
          rounded
          size="lg"
          type="submit"
          />
        </div>

        <div class="full-width q-gutter-y-sm">
          <q-btn
          label="Register"
          color="secondary"
          class="full-width"
          rounded
          flat
          to="/register"
          size="sm"
          />

          <q-btn
          label="Forgot Password ?"
          color="secondary"
          class="full-width"
          rounded
          flat
          :to="{name: 'forgot-password'}"
          size="sm"
          />
        </div>
      </div>
    </div>

  </q-form>
</q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'
import useAuthUser from 'src/composables/UseAuthUser.js'

export default defineComponent({
  name: 'PageLogin',
  setup () {
    const router = useRouter()

    const { login, isLoggedIn } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'me' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login successfuly')
        router.push({ name: 'Me' })
      } catch (error) {
        notifyError(error.message)
        // alert(error.message)
      }
    }
    return {
      form,
      handleLogin
    }
  }

})

</script>
