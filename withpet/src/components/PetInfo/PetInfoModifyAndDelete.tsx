import React from 'react'
import 'components/App/App.css'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import { dbService } from 'firebase-config'


const PetInfoModifyAndDelete: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const petInfo = useSelector(
    (petInfoState: RootState) => petInfoState.petInfo.petInfoGroup,
  )
  const petInfoId = useSelector((state:RootState) => state.petInfo.petInfoId)

  const onModifyClick = async() => {
    await setDoc(doc(dbService, 'petInfo', petInfoId),{ ...petInfo, userUid })
  }

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
        onClick={onModifyClick}
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
