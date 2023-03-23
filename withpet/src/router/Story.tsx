import React, { useEffect, useState } from 'react'
import Container from 'components/UI/Container'
import StoryCard from './../components/Story/StoryCard'
import Header from 'components/Header/Header'
import { auth, dbService } from 'firebase-config'
import Navigation from 'components/Navigation/Navigation'
import { collection, getDocs } from 'firebase/firestore'
import StoryTap from './../components/Story/StoryTap'

export interface DiaryData {
  check: number
  date: string
  id: number
  imagesUrl: {
    id: string
    origin: string
    url: string
  }[]
  pet: string
  title: string
  text: string
  user: string
  weather: 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy'
}

const Story = () => {
  const [diaryData, setDiaryData] = useState<DiaryData[]>([])

  const diaryCollectionRef = collection(dbService, 'diaryInfo')

  useEffect(() => {
    const getData = async () => {
      try {
        const diarySnap = await getDocs(diaryCollectionRef)
        const data = diarySnap.docs.map((doc): any => doc.data())
        setDiaryData(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Header title={'Story'} />
      <Container style={'bg-Gray-100 pb-20 pt-20'}>
        <StoryTap />
        {diaryData.map(data => (
          <StoryCard key={data.id} data={data} />
        ))}
      </Container>
      <Navigation title={'story'} />
      {/* <button onClick={() => auth.signOut()}>로그아웃</button> */}
    </>
  )
}

export default Story
