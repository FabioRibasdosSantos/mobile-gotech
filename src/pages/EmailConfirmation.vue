<template>
  <q-page padding>

      <p class="text-body1 justify-center">
      Obrigado por se cadastrar !
      </p>
      <p class="text-body1 justify-center">
        Por favor confirme no seu email para finalizar o registro: <strong>{{ $route.query.email }}</strong>
      </p>
      <div class="row justify-center q-gutter-y-sm">
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
          <q-btn
              label="back to login"
              color="darck"
              class="full-width"
              rounded
              :to="{name: 'login'}"
              />
          </div>
        </div>

  </q-page>
  </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
