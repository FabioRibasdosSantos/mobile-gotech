<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <p> Ola {{ user.user_metadata.name }}</p>
    </div>

  </q-page>
  </template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composabbles/UseAuthUser'

export default defineComponent({
  name: 'PageME',
  setup () {
    const { user } = useAuthUser()

    return {
      user
    }
  }
})
</script>
