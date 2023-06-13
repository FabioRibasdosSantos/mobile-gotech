<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="navbar">

        <q-toolbar-title class="flex flex-center">
          <img
            alt="Go Tech"
            src="~assets/Logo-redondo.png"
            style="width: 200px; height: 200px"
          >
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginLayout',

  setup () {
    return {
    }
  }
})
</script>
