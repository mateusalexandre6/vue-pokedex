/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const pokemonTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5', 
    surface: '#F5F5F5',   
    primary: '#ffcd06',   
    'primary-darken-1': '#D32F2F', 
    secondary: '#2760ad',  
    'secondary-darken-1': '#1565C0', 
    error: '#B00020',     
    info: '#2196F3',      
    success: '#4CAF50',  
    warning: '#FFC107',  
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'pokemonTheme',
    themes: {
      pokemonTheme,
    },
  },
})
