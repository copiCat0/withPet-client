import React from 'react'
import Container from 'components/UI/Container'
import StoryCard from 'components/Story/StoryCard'
import Header from 'components/Header/Header'
import { auth } from 'firebase-config'
import Navigation from 'components/Navigation/Navigation'
import StoryTap from 'components/Story/StoryTap'

const Story = () => {
  return (
    <>
      <Header title={'Story'} />
      <Container style={'bg-Gray-100 pb-20 pt-20'}>
        <StoryTap />
        <StoryCard />
      </Container>
      <Navigation title={'story'} />
      <button onClick={() => auth.signOut()}>로그아웃</button>
    </>
  )
}

export default Story
