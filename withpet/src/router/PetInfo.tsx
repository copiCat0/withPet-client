import React from 'react'
import 'components/App/App.css'
import Logo from 'assets/Logo/petinfoLogo.webp'
import Container from 'components/UI/Container'
import PetInfoImg from 'components/PetInfo/PetInfoImg'
import PetInfoInput from 'components/PetInfo/PetInfoInput'
import PetInfoRadioBtn from 'components/PetInfo/PetInfoRadioBtn'

import PetInfoRegister from 'components/PetInfo/PetInfoRegister'
import PetInfoRadioGroup from 'components/PetInfo/PetInfoRadioGroup'

import { RootState } from 'redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { create, getPetInfo } from 'redux/slice/petInfo/petInfoSlice'

import { setDoc, doc, collection } from 'firebase/firestore'
import { dbService } from 'firebase-config'
import PetInfoModifyAndDelete from 'components/PetInfo/PetInfoModifyAndDelete'

const PetInfo: React.FC = () => {
  const userUid = useSelector((state: RootState) => state.auth.userUid)
  const dispatch = useDispatch()
  const petInfo = useSelector(
    (petInfoState: RootState) => petInfoState.petInfo.petInfoGroup,
  )
  const petInfoRef = doc(collection(dbService, 'petInfo'))

  const onChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e
    dispatch(
      getPetInfo({
        ...petInfo,
        [name]: value,
      }),
    )
  }

  const petInfoObj = {
    ...petInfo,
    user: userUid,
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await setDoc(petInfoRef, petInfoObj)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
    dispatch(create(petInfoRef.id))
  }

  return (
    <Container style={'bg-primary-100 justify-center'}>
      <div role="petInfogroup">
        <h2 className="flex justify-center ">
          <img src={Logo} alt="Pet Information Logo" className="w-full"></img>
        </h2>
        <form
          className="flex flex-col justify-center items-center"
          aria-label="Pet Information"
          onSubmit={onSubmit}
        >
          <PetInfoImg />

          <PetInfoInput
            id="petType"
            name="petType"
            type="text"
            list="petList"
            onChange={onChange}
          >
            type
          </PetInfoInput>
          <datalist id="petList">
            <option value="강아지" />
            <option value="고양이" />
            <option value="쥐" />
            <option value="새" />
            <option value="파충류" />
          </datalist>

          <PetInfoInput
            id="petName"
            name="petName"
            type="text"
            onChange={onChange}
          >
            이름
          </PetInfoInput>

          <PetInfoInput
            id="petBirth"
            name="petBirth"
            type="date"
            onChange={onChange}
          >
            생년월일
          </PetInfoInput>

          <PetInfoRadioGroup label="성별">
            <PetInfoRadioBtn
              defaultChecked
              name="petGender"
              value="male"
              onChange={onChange}
            >
              남
            </PetInfoRadioBtn>
            <PetInfoRadioBtn
              name="petGender"
              value="female"
              onChange={onChange}
            >
              여
            </PetInfoRadioBtn>
          </PetInfoRadioGroup>

          <PetInfoRadioGroup label="중성화">
            <PetInfoRadioBtn
              defaultChecked
              name="petNeuter"
              value="yes"
              onChange={onChange}
            >
              네
            </PetInfoRadioBtn>
            <PetInfoRadioBtn name="petNeuter" value="no" onChange={onChange}>
              아니오
            </PetInfoRadioBtn>
          </PetInfoRadioGroup>

          {<PetInfoRegister id="submit" type="submit" value="등록하기" />}
        </form>

        <PetInfoModifyAndDelete />
      </div>
    </Container>
  )
}

export default PetInfo
