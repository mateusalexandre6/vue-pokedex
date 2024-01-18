<template>
    <v-card :class="['rounded', getTypeBackgroundColor(), 'pokemon']" @click="openDialog">
        <v-row justify="center" style="margin: auto;">
            <v-col v-for='type in pokemon.types' :key='type' cols='auto'>
                <v-chip> {{ type.type.name }}</v-chip>
            </v-col>
        </v-row>
        <v-img :src="getImage()" :class="getTypeBackgroundColor()" :alt="pokemon.name" height="200"></v-img>
        <v-card-title style="text-align: center; text-transform: uppercase; padding: 10px;">{{ pokemon.name }}</v-card-title>
        <v-card-actions>
            <v-btn  elevation="4"   
          class="text-none text-subtitle-1"
          color="primary"
          size="small"
          variant="flat" 
          style="display: flex; margin-left: auto; margin-top: auto;"
           @click="openDialog">Ver Detalhes</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Object,
            required: true
        },
    },
    methods: {
        getTypeBackgroundColor() {
            return this.pokemon.types[0].type.name;
        },
        getImage() {
            return this.pokemon.sprites.other.dream_world.front_default;
        },
        openDialog() {
            this.$emit('openDialog', this.pokemon);
        }

    }
}
</script>

<style scoped>
</style>
