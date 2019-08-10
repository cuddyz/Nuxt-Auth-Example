import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAyXan_eLMOKYHfFgjqEwlsuCTMgT6wN0s',
  authDomain: 'nuxt-auth-example.firebaseapp.com',
  databaseURL: 'https://nuxt-auth-example.firebaseio.com',
  projectId: 'nuxt-auth-example',
  storageBucket: '',
  messagingSenderId: '169930500460',
  appId: '1:169930500460:web:0bd8f5cf7191ab70'
}

// eslint-disable-next-line
!firebase.apps.length ? firebase.initializeApp(config) : ''

export const auth = firebase.auth()
