import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyCzCQ7p381EIq-eQtArdNmxWyPjX_jiKRk",
  authDomain: "rally-cs408.firebaseapp.com",
  databaseURL: "https://rally-cs408.firebaseio.com",
  projectId: "rally-cs408",
  storageBucket: "rally-cs408.appspot.com"/*,
  messagingSenderId: "289928867041"*/
})

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedRallys: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/West_Lafayette%2C_Indiana_Public_Library_and_urban_spread%2C_Autumn.jpg',
        id: 'aFhKtEqPtIjjIIhhDFDDss',
        title: 'Rally in West Lafayette',
        date: new Date(),
        location: 'West Lafayette',
        description: 'Burgers'
      },
      {
        imageUrl: 'http://testimages.tourtheten.com/wp-content/uploads/2011/09/IMG_4542.jpg',
        id: '11232345357907645720582056837',
        title: 'Rally at PMU',
        date: new Date(),
        location: 'PMU',
        description: 'Food'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedRallys (state, info) {
      state.loadedRallys = info
    },
    createRally (state, info) {
      state.loadedRallys.push(info)
    },
    setUser (state, info) {
      state.user = info
    },
    setLoading (state, info) {
      state.loading = info
    },
    setError (state, info) {
      state.error = info
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadRallys ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('Rallys').once('value')
        .then((data) => {
          const Rallys = []
          const obj = data.val()
          for (let key in obj) {
            Rallys.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedRallys', Rallys)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createRally ({commit, getters}, info) {
      const Rally = {
        title: info.title,
        location: info.location,
        imageUrl: info.imageUrl,
        description: info.description,
        date: info.date.toISOString(),
        creatorId: getters.user.id
      }
      /*firebase.database().ref('Rallys').push(Rally)
        .then((data) => {
          const key = data.key
          commit('createRally', {
            ...Rally,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })*/
      // Reach out to firebase and store it
    },
    signUserUp ({commit}, info) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(info.email, info.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredRallys: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, info) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(info.email, info.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredRallys: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, info) {
      commit('setUser', {id: info.uid, registeredRallys: []})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedRallys (state) {
      return state.loadedRallys.sort((RallyA, RallyB) => {
        return RallyA.date > RallyB.date
      })
    },
    featuredRallys (state, getters) {
      return getters.loadedRallys.slice(0, 5)
    },
    loadedRally (state) {
      return (RallyId) => {
        return state.loadedRallys.find((Rally) => {
          return Rally.id === RallyId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})