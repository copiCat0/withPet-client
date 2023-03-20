import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const dbService = getFirestore(app)
export const storageService = getStorage(app)

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }
