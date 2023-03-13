import React from 'react'
import { firestore } from 'firebase-config.js'


const Home = () => {
  console.log(firestore)

  return (
    <div>Home</div>
  )
}

export default Home