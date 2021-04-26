import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    secrets:[],
    currentSecret: ''
  },
  getters:{
    getSecrets: state => state.secrets,
    currentSecret: state => state.currentSecret
  },
  mutations: {
    createSecret: (state, secret) => state.secrets.unshift(secret),
    getSecret: (state, secret) => state.currentSecret = secret
  },
  actions: {
    async createSecret({commit}, secret){
      console.log(secret)
      const response = await axios.post(`http://80.211.53.183:3000/api/v1/secret/`, {...secret})
      commit('createSecret',response.data)
    },
    async getSecret({commit}, data){
      console.log(data)
      const response = await axios.get(`http://80.211.53.183:3000/api/v1/secret/${data.id}/${data.secretKey}`)
      console.log(response.data)
      commit('getSecret',response.data)
    },
    async deleteSecret({commit},data){
      console.log(commit)
      console.log(data)
      const response = await axios.delete(`http://80.211.53.183:3000/api/v1/secret/${data.id}`,{
        headers:{
          Authorization: `Bearer ${data.token}`
        }
      })
      console.log(response.data)
    },
  },
  modules: {
  }
})
