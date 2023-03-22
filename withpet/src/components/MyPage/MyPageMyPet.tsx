import React from 'react'
import 'components/App/App.css'
import MyPageEditBtn from './MyPageEditBtn'
import MyPetContent from './MyPetContent'

const MyPageMyPet: React.FC = () => {
  return (
    <div
      aria-label="MyPet"
      className="bg-white w-7/12 mb-8 flex flex-col items-center border-black border-2 shadow-300"
    >
      <MyPageEditBtn />
      <MyPetContent />
    </div>
  )
}

export default MyPageMyPet
