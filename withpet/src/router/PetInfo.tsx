import React from 'react'
import 'components/App/App.css'
import Logo from 'assets/Logo/petinfoLogo.webp'
import PetInfoImg from 'components/PetInfo/PetInfoImg'
import PetInfoInput from 'components/PetInfo/PetInfoInput'
import PetInfoRadioBtn from 'components/PetInfo/PetInfoRadioBtn'
import PetInfoRegister from 'components/PetInfo/PetInfoRegister'
import PetInfoRadioGroup from 'components/PetInfo/PetInfoRadioGroup'

import { RootState } from 'redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getPetInfo, getPetImg } from 'redux/slice/petInfo/petInfoSlice'

import { getDownloadURL, ref } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { dbService, storageService } from 'firebase-config'

const PetInfo: React.FC = () => {
  const petInfo = useSelector(
    (petInfoState: RootState) => petInfoState.petInfo.petInfoGroup,
  )
  const dispatch = useDispatch()

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
    if (petInfo.petImg !== '') {
      const imgUrl = await getDownloadURL(ref(storageService, 'petImg/petImg'))
      dispatch(getPetImg(imgUrl))
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await addDoc(collection(dbService, 'petInfo'), petInfo)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center bg-primary-100 max-w-scr h-full">
      <div role="petInfogroup">
        <h2 className="flex justify-center mt-12">
          <img src={Logo} alt="Pet Information Logo"></img>
        </h2>
        <form
          className="flex flex-col justify-center items-center"
          aria-label="Pet Information"
          onSubmit={onSubmit}
        >
          <PetInfoImg onChange={onChange}></PetInfoImg>

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

          <PetInfoRegister id="submit" type="submit" value="등록하기" />
        </form>
      </div>
    </section>
  )
}

export default PetInfo
