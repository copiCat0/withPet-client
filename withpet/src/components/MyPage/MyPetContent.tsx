import React from 'react'
import 'components/App/App.css'

type PetInfoProps = {
  title: React.ReactNode
  value: React.ReactNode
}

const MyPetInfo: React.FC<PetInfoProps> = ({ title, value }) => {
  return (
    <div className="flex justify-between wrap text-ellipsis">
      <dt className="w-6/12">{title}</dt>
      <dd className="w-6/12 text-right text-ellipsis line-clamp-1">{value}</dd>
    </div>
  )
}

const MyPetContent: React.FC = () => {
  return (
    <>
      <img
        alt="반려동물 사진"
        className="w-32 h-32 my-8 rounded-full border-2 border-black"
      />
      <div
        aria-label="MyPetInfo"
        className="bg-primary-100 w-full px-5 py-6 border-t-2 border-gray-600">
        <dl>
          <MyPetInfo title="타입" value="강아지" />
          <MyPetInfo title="이름" value="쪼꼬미" />
          <MyPetInfo title="생년월일" value="2019-12-14" />
        </dl>
      </div>
    </>
  )
}

export default MyPetContent
