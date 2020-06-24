// Quando tiver gerando o Build pra produção, será substituído essa url para a API de produção 

import Vue from 'vue'
//export const OAPP_URL = '__seraquepresta_user'
//export const APP_URL = 'https://seraquepresta-api.herokuapp.com/api'

//export const OAPP_URL = 'https://seraquepresta-apifront.herokuapp.com/'
//export const APP_URL = 'https://seraquepresta-api.herokuapp.com/'

export const userKey = '__seraquepresta_user'
//port const OAPI_URL = 'https://seraquepresta-api.herokuapp.com/api'
export const baseApiUrl = 'https://seraquepresta-api.herokuapp.com'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }