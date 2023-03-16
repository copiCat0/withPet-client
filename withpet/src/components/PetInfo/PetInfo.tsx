import React, { useState } from 'react'
import Logo from 'assets/Logo/petinfoLogo.webp'
import PetInfoInput from 'components/PetInfo/PetInfoInput'
import 'components/App/App.css'

import PetInfoRadioGroup from './PetInfoRadioGroup'
import PetInfoRadioBtn from './PetInfoRadioBtn'
import PetInfoRegister from './PetInfoRegister'

const PetInfo = () => {
  const [inputValues, setInputValues] = useState({
    petImg: '',
    petType: '',
    petName: '',
    petBirth: '',
  })
  const { petImg, petType, petName, petBirth } = inputValues

  const [checkValues, setCheckValues] = useState({
    petGender: 'male',
    petNeuter: 'yes',
  })

  const [submit, setSubmit] = useState({ ...inputValues, ...checkValues })

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const onClick = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e
    setCheckValues({
      ...checkValues,
      [name]: value,
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const petInfo = { ...inputValues, ...checkValues }
    setSubmit(petInfo)

    return submit
  }

  return (
    <section className="flex flex-col items-center justify-center bg-primary-100 max-w-scr h-screen">
      <div role="petInfogroup">
        <h2>
          <img src={Logo} alt="Pet Information Logo"></img>
        </h2>
        <form
          className="flex flex-col"
          aria-label="Pet Information"
          onSubmit={onSubmit}
        >
          <PetInfoInput
            id="petImg"
            name="petImg"
            type="file"
            accept="img/*"
            onChange={onChange}
            value={petImg}
            className=""
          />

          <PetInfoInput
            id="petType"
            name="petType"
            type="text"
            list="petList"
            onChange={onChange}
            value={petType}
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
            value={petName}
          >
            이름
          </PetInfoInput>

          <PetInfoInput
            id="petBirth"
            name="petBirth"
            type="date"
            onChange={onChange}
            value={petBirth}
          >
            생년월일
          </PetInfoInput>

          <PetInfoRadioGroup label="성별">
            <PetInfoRadioBtn
              defaultChecked
              name="petGender"
              value="male"
              onClick={onClick}
            >
              남
            </PetInfoRadioBtn>
            <PetInfoRadioBtn name="petGender" value="female" onClick={onClick}>
              여
            </PetInfoRadioBtn>
          </PetInfoRadioGroup>

          <PetInfoRadioGroup label="중성화">
            <PetInfoRadioBtn
              defaultChecked
              name="petNeuter"
              value="yes"
              onClick={onClick}
            >
              네
            </PetInfoRadioBtn>
            <PetInfoRadioBtn name="petNeuter" value="no" onClick={onClick}>
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
