import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/Header/Header'
import Container from 'components/UI/Container'
import Navigation from 'components/Navigation/Navigation'
import ChatGPT from 'components/Chat/ChatGPT'

const Chatting = () => {
  return (
    <>
      <Header title={'Chatting'} />
      <Container style={'bg-gray-100 h-screen'}>
        <div className="h-[500px] flex flex-col">
            <ChatGPT />
        </div>
      </Container>
      <Navigation title={'chatting'} />
    </>
  )
}

export default Chatting
