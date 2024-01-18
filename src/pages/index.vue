<template>
  <v-main>
    <pokemon-dialog :pokemon="pokemon" ref="pokemonDialogInstance" />
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-label class="text-center" style="font-size: 30px; font-weight: bold; color: #2760ad;">PokeDex</v-label>
        </v-col>
        </v-row>
        <v-row>
        <v-col cols="10">
          <v-text-field
            v-model="search"
            full-width
            color="secondary"
            label="Pesquisar"
            variant="outlined"
            dense
            hide-details
            class="mt-5"
            @keyup.enter="getPokemonByName"
          ></v-text-field>
          </v-col>
          <v-col cols="2" class="text-center" style="display: flex; align-items: center;">
          <v-btn color="primary" @click="getPokemonByName" class="mt-5">Pesquisar</v-btn>
        </v-col>
          </v-row>

      <v-row>
        <v-col cols="12" md="4" v-for="pokemon in pokemons" :key="pokemon.name">
          <pokemon-card :pokemon="pokemon" @openDialog="handleOpenDialog" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="text-center" v-if="size">
            <v-pagination
              v-model="offset"
              color="secondary"
              :length="size"
              :total-visible="7"
              class="my-5"
              @input="getPokemonsList"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { getAllPokemon, getPokemonDetail, getOnePokemon } from '@/api/pokemon.js';
import PokemonCard from '@/components/pokemonCard.vue';
import PokemonDialog from '@/components/pokemonDialog.vue';

export default {
  name: 'IndexPage',
  components: {
    PokemonCard,
    PokemonDialog,
  },
  setup() {
    var pokemons = ref([]);
    var pokemon = ref(null);
    var limit = 21;
    var offset = ref(0);
    var size = ref(0);
    var search = ref('');
    const pokemonDialogInstance = ref(null);

    const getPokemonsList = async () => {
      try {
        const response = await getAllPokemon(offset.value, limit);
        const pokemonsList = response.results;
        size.value = response.count / limit;
        const pokemonsWithDetails = await Promise.all(
          pokemonsList.map(async (pokemon) => {
            try {
              const pokemonDetail = await getPokemonDetail(pokemon);
              return pokemonDetail.data;
            } catch (error) {
              console.error(`Failed to fetch details for ${pokemon.name}:`, error);
              return null;
            }
          })
        );
        pokemons.value = pokemonsWithDetails.filter((pokemon) => pokemon !== null);
      } catch (error) {
        console.error('Failed to fetch pokemons:', error);
      }
    };

    const getPokemonByName = async () => {
      try {
        if (search.value === '') {
          getPokemonsList();
          return;
        }
        
        const response = await getOnePokemon(search.value);
        size.value = 1 / limit;

        pokemons.value = [response];
      } catch (error) {
        console.error('Failed to fetch pokemons:', error);
        getPokemonsList();
      }
    };

    const handleOpenDialog = (pokemonArg) => {
      pokemon.value = pokemonArg;
      console.log(pokemon.value);
      pokemonDialogInstance.value.openDialog();
      
    };

    onMounted(() => {
      getPokemonsList();
      
    });
    watch(offset, getPokemonsList);

    return {
      pokemons,
      pokemon,
      offset,
      size,
      getPokemonsList,
      handleOpenDialog,
      search,
      getPokemonByName,
      pokemonDialogInstance,

    };
  },
};
</script>
