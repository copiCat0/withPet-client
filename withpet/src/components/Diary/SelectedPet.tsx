import React, { useState, useEffect } from 'react'
import { collection, getDocs, DocumentData } from 'firebase/firestore'
import { dbService } from 'firebase-config'

const SelectedPet: React.FC = () => {
  const [myPets, setMyPets] = useState<DocumentData[]>([])

  useEffect(() => {
    const getMyPet = async () => {
      const myPetList = await getDocs(collection(dbService, 'petInfo'))
      setMyPets(myPetList.docs.map(doc => doc.data()))
    }
    getMyPet()
  }, [])

  const onFocusPet = () => {
    // e.stopPropagation()
    // console.log(e.target.name)
  }

  return (
    <div>
      <p className="text-xs mt-2">반려동물 선택</p>
      {myPets &&
        myPets.map(pet => (
          <button
            type="button"
            name={pet.petName}
            key={pet.petName}
            onClick={onFocusPet}
            className="mr-4 mt-1.5 mb-3"
          >
            <figure className="w-[50px] h-[60px] bg-white flex flex-col justify-center items-center">
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
