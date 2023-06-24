import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import PokedexOperations from '@/components/PokedexItens/PokedexOperations.vue'

const app = createApp(App).mount('#app')
app.component('PokedexOperations',PokedexOperations)
