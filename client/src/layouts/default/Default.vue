<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="NoteApp"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <View></View>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import View from "@/layouts/default/View.vue";
</script>
