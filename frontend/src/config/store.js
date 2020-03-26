//Área de amazenamento para 
//compartilhar entre os componentes
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Criando as funções que vão manipular os dados
export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            name: 'Daniel Farney',
            email: 'f_farney@hotmail.com'
        }
    },
    // 'user' como objeto fixo. Posteriormente esse user será substituido por um usuário que realmente fez login na aplicação
    //É reponsável por fazer a alternancia dos estados do Menu
    mutations: {
        toggleMenu(state, isVisible) {
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            }else {
                state.isMenuVisible = isVisible
            }
        }
    }
})
