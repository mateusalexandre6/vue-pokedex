<template>
  <v-row justify="center">
  
    <v-dialog v-model="dialog" width="auto" :class="['rounded']">
            
      <v-card width="auto" class="mx-auto my-12" :class="['rounded', getTypeBackgroundColor(), 'pokemonSelected']">
        <v-card-actions>
        <v-btn 
          elevation="4"   
          class="text-none text-subtitle-1"
          color="primary"
          size="small"
          variant="flat" 
          style="display: flex; margin-left: auto;" @click="dialog = false">Fechar</v-btn>
      </v-card-actions>
        <v-card-title style="text-align: center; text-transform: uppercase;" >{{ pokemon.name }}</v-card-title>
        <v-img :src="getImage()"  :height="250" :alt="pokemon.name"></v-img>
    
      <v-card-text>
      <v-row justify="space-around" style="margin-bottom: 10px;">
        <v-col cols="4">
          <v-card :class="['rounded', getTypeBackgroundColor(), 'card-details']">
            <v-card-title style="text-align: center; text-transform: uppercase;">Habilidades</v-card-title>
            <v-card-text>
              <v-row justify="center" style="margin: auto;">
                <v-col v-for="(ability, index) in pokemon.abilities.slice(0, 6)" :key="index" cols="auto">
                  <v-chip style="text-transform: uppercase; background-color: white;">{{ ability.ability.name }}</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card :class="['rounded', getTypeBackgroundColor(), 'card-details']">
            <v-card-title style="text-align: center; text-transform: uppercase;">Movimentos</v-card-title>
            <v-card-text>
              <v-row justify="center" style="margin: auto;">
                <v-col v-for="(move, index) in pokemon.moves.slice(0, 6)" :key="index" cols="auto">
                  <v-chip style="text-transform: uppercase; background-color: white;">{{ move.move.name }}</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card :class="['rounded', getTypeBackgroundColor(), 'card-details']">
            <v-card-title style="text-align: center; text-transform: uppercase;">Stats</v-card-title>
            <v-card-text>
              <v-row justify="center" style="margin: auto;">
                <v-col v-for="(stat, index) in pokemon.stats.slice(0, 6)" :key="index" cols="auto">
                  <v-chip style="text-transform: uppercase; background-color: white;">{{ stat.stat.name }}: {{ stat.base_stat }}</v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
 
      </v-card-text>


    </v-card>
  </v-dialog>
  </v-row>
  </template>

<script>
export default {
  name: 'PokemonDialog',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    getTypeBackgroundColor() {
      return this.pokemon?.types[0]?.type?.name || 'normal';
    },
    getImage() {
      return this.pokemon.sprites.other.dream_world.front_default;
    },
    openDialog() {
      this.dialog = true;

      
    },
  },
};
</script>

<style scoped>

.card-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);

}
.card-details:hover {
    transform: scale(1.05);
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    transition: all .2s ease-in-out;
    

}

.pokemons {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;
}



</style>