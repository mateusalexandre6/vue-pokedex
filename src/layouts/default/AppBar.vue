<template>
  <v-app-bar :elevation="7" rounded>
    <template v-slot:image>
      <v-img gradient="to top right, #ffcd06,#ffcd06"></v-img>
    </template>

    <v-app-bar-title style="color: #2760ad;">Vue PokeDex</v-app-bar-title>

    <v-icon class="mr-4" color="secondary"  @click="openGitHub">mdi-github</v-icon>
    <v-icon class="mr-4"  color="secondary"  @click="openLinkedIn">mdi-linkedin</v-icon>
  </v-app-bar>

  <v-main>
    <DeafaultView />
  </v-main>
</template>

<script setup>
import DeafaultView from './View.vue'

const openGitHub = () => {
  window.open('https://github.com/mateusalexandre6', '_blank');
}

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/mateus-alexandre-o-alves-360627102/', '_blank');
}
</script>
