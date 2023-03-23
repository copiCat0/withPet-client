import React, { useEffect, useState } from 'react'
import 'components/App/App.css'
import MyPetInfo from './MyPetInfo'
import MyPageEditBtn from './MyPageEditBtn'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import { dbService } from 'firebase-config'
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

const MyPageMyPet: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const [myPets, setMyPets] = useState<DocumentData[]>([])

  useEffect(() => {
    const getMyPet = async () => {
      const q = query(
        collection(dbService, 'petInfo'),
        where('user', '==', userUid),
      )
      const querySnapshot = await getDocs(q)
      setMyPets(querySnapshot.docs.map(doc => doc.data()))
    }
    getMyPet()
  }, [])

  return (
    <>
      {myPets &&
        myPets.map(pet => (
          <>
            <div
              aria-label="MyPet"
              className="bg-white w-7/12 mb-8 flex flex-col items-center border-black border-2 shadow-300"
            >
              <MyPageEditBtn />
              <img
                alt="반려동물 사진"
                src={pet.petImg}
                className="w-32 h-32 my-8 rounded-full border-2 border-black bg-white"
              />
              <div
                aria-label="MyPetInfo"
                className="bg-primary-100 w-full px-5 py-6 border-t-2 border-gray-600"
              >
                  <MyPetInfo title="타입" value={pet.petType} />
                  <MyPetInfo title="이름" value={pet.petName} />
                  <MyPetInfo title="생년월일" value={pet.petBirth} />
              </div>
            </div>
          </>
        ))}
    </>
  )
}

export default MyPageMyPet
