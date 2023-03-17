import React, { useState } from 'react'
import Logo from 'assets/Logo/petinfoLogo.webp'
import 'components/App/App.css'
import PetInfoInput from 'components/PetInfo/PetInfoInput'
import PetInfoRadioGroup from './PetInfoRadioGroup'
import PetInfoRadioBtn from './PetInfoRadioBtn'
import PetInfoRegister from './PetInfoRegister'
import PetInfoImg from './PetInfoImg'

import { useDispatch, useSelector } from 'react-redux'
import { getPetInfo } from 'redux/slice/petInfo/petInfoSlice'
import { RootState } from 'redux/store'

const PetInfo = () => {
  const petInfo = useSelector(
    (petInfoState: RootState) => petInfoState.petInfo.petInfoGroup,
  )
  const dispatch = useDispatch()

  const [submit, setSubmit] = useState(petInfo)

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmit(petInfo)

    return submit
  }

  return (
    <section className="flex flex-col items-center justify-center bg-primary-100 max-w-scr h-screen">
      <div role="petInfogroup">
        <h2 className="flex justify-center">
          <img src={Logo} alt="Pet Information Logo"></img>
        </h2>
        <form
          className="flex flex-col justify-center items-center"
          aria-label="Pet Information"
          onSubmit={onSubmit}
        >
          <PetInfoImg
            id="petImg"
            name="petImg"
            type="file"
            accept="img/*"
            onChange={onChange}
          ></PetInfoImg>

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
