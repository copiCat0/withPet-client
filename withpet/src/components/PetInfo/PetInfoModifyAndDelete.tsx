import React from 'react'
import 'components/App/App.css'
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import { dbService } from 'firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'

const PetInfoModifyAndDelete: React.FC = () => {
  const petInfoId = useSelector((state:RootState) => state.petInfo.petInfoId)
  const onDeleteClick =  async () => {
    await deleteDoc(doc(dbService, 'petInfo', petInfoId))
  }


  return (
    <section className="flex flex-col w-full items-center">
      <input
        id="modify"
        type="button"
        className="w-11/12 py-4 mt-6 mb-2 bg-primary-200 text-white font-bold shadow-200 cursor-pointer"
        value="수정하기"
      />

      <input
        id="delete"
        type="button"
        className="w-11/12 py-4 mb-6 mt-2 bg-stone-400 text-white font-bold shadow-200 cursor-pointer"
        value="삭제하기"
        onClick={onDeleteClick}
      />
    </section>
  )
}

export default PetInfoModifyAndDelete
