import React, { useState, useEffect, useRef } from 'react'
import { collection, getDocs, DocumentData } from 'firebase/firestore'
import { dbService } from 'firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { getDiary } from 'redux/slice/diary/diarySlice'
import { RootState } from 'redux/store'

const SelectedPet: React.FC = () => {
  const dispatch = useDispatch()
  const [myPets, setMyPets] = useState<DocumentData[]>([])
  const petBtn = useRef<HTMLButtonElement>(null)
  const diary = useSelector(
    (diaryState: RootState) => diaryState.diary.diaryGroup,
  )


  useEffect(() => {
    const getMyPet = async () => {
      const myPetList = await getDocs(collection(dbService, 'petInfo'))
      setMyPets(myPetList.docs.map(doc => doc.data()))
    }
    getMyPet()
  }, [])

  const onFocusPet = (e: any) => {
    const pet = e.currentTarget.value
    dispatch(getDiary({ ...diary, pet }))
  }

  return (
    <div>
      <p className="text-xs mt-2">반려동물 선택</p>
      {myPets &&
        myPets.map(pet => (
          <button
            type="button"
            ref={petBtn}
            value={pet.petName}
            key={pet.petName}
            onClick={e => onFocusPet(e)}
            className=" w-[50px] h-[60px] bg-white mr-4 mt-1.5 mb-3"
          >
            <figure
              className="flex flex-col justify-center items-center"
              // onClick={e => e.stopPropagation()}
            >
              <img
                src={pet.petImg}
                alt={pet.petName}
                className="w-11 h-[38px] object-cover"
              />
              <figcaption className="text-xs">{pet.petName}</figcaption>
            </figure>
          </button>
        ))}
    </div>
  )
}

export default SelectedPet
