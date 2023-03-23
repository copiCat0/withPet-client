import React, { useEffect, useState } from 'react'
import { dbService } from 'firebase-config'
import { getDoc, doc, collection, getDocs } from 'firebase/firestore'

type StoryWriterProps = {
  DiaryWeather: 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy'
  userUid: string
  createTime: number
  pet: string
}

interface Weathers {
  sunny: string
  rainy: string
  cloudy: string
  stormy: string
  snowy: string
}

const DiaryWeathers: Weathers = {
  sunny: 'w-10 h-10 bg-sprites_icon bg-[left_-124px_top_-104px] -125px -147px',
  rainy: 'w-10 h-10 bg-sprites_icon bg-[left_-83px_top_-108px] -84px -150px',
  cloudy: 'w-10 h-10 bg-sprites_icon bg-[left_-42px_top_-109px] -43px -151px',
  stormy: 'w-10 h-10 bg-sprites_icon bg-[left_-1px_top_-105px] -2px -148px',
  snowy: 'w-10 h-10 bg-sprites_icon bg-[left_-167px_top_-104px] -167px -146px',
}

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const StoryWriter: React.FC<StoryWriterProps> = ({
  DiaryWeather = 'sunny',
  createTime,
  userUid,
  pet,
}) => {
  const getDate = new Date(createTime)

  const dateList = {
    year: getDate.getFullYear(),
    month: MONTH[getDate.getMonth()],
    day: getDate.getDate().toString(),
  }

  const [userName, setUserName] = useState('')
  const [userImg, setUserImg] = useState('')

  const petInfoRef = collection(dbService, 'petInfo')
  useEffect(() => {
    const getUser = async () => {
      try {
        const petSnap = await getDocs(petInfoRef)
        const petData = petSnap.docs.map((doc): any => doc.data())
        const petResult = petData.filter(
          item => item.user === userUid && item.petName === pet,
        )
        setUserImg(petResult[0].petImg)
        setUserName(petResult[0].petName)
      } catch (error) {
        console.error(`사용자 정보를 가져올 수 없습니다. ${error}`)
      }
    }

    getUser()
  }, [])

  return (
    <div className={'flex items-center justify-between p-1'}>
      <div className={'flex items-center mt-2 text-sm'}>
        <div
          className={
            'w-14 h-14 mr-3 rounded-full bg-sprites_icon bg-[left_-58px_top_-190px] bg-slate-700 overflow-hidden'
          }
        >
          <img
            className={'object-cover h-full w-full'}
            src={userImg}
            alt={`${userName} 프로필`}
          />
        </div>
        <div className={'flex flex-col'}>
          <span className={'font-bold'}>{userName}</span>
          <span
            className={'font-normal'}
          >{`${dateList.month} ${dateList.day} ${dateList.year}`}</span>
        </div>
      </div>
      <div
        aria-label={DiaryWeather}
        className={`${DiaryWeathers[DiaryWeather]}`}
      ></div>
    </div>
  )
}

export default StoryWriter
