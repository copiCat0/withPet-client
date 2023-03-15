import React from 'react'
import Logo from 'assets/Logo/petinfoLogo.webp'
import PetInfoButton from 'components/PetInfo/PetInfoButton'
import PetInfoInput from 'components/PetInfo/PetInfoInput'
import 'components/App/App.css'

const PetInfo = () => {
  return (
    <div role="petInfogroup" className="flex flex-col items-center">
      <h2>
        <img src={Logo} alt="Pet Information Logo"></img>
      </h2>
      <form className="flex flex-col" aria-label="Pet Information">
        <input type="file" accept="img/*" />

        <PetInfoInput id="petList" type="text" list="petList">
          type
        </PetInfoInput>
        <datalist id="petList">
          <option value="강아지" />
          <option value="고양이" />
          <option value="쥐" />
          <option value="새" />
          <option value="파충류" />
        </datalist>

        <PetInfoInput id="petName" type="text">
          이름
        </PetInfoInput>

        <PetInfoInput id="petBirth" type="date">
          생년월일
        </PetInfoInput>

        <PetInfoInput id="petGender" type="hidden">
          성별
        </PetInfoInput>
        <div role="petGenderGroup">
          <PetInfoButton id="male">남</PetInfoButton>
          <PetInfoButton id="female">여</PetInfoButton>
        </div>

        <PetInfoInput id="petNeuter" type="hidden">
          중성화여부
        </PetInfoInput>
        <div role="petNeuterGroup">
          <PetInfoButton id="yes">예</PetInfoButton>
          <PetInfoButton id="no">아니오</PetInfoButton>
        </div>

        <input type="submit" value="등록하기" />
      </form>
    </div>
  )
}

export default PetInfo
