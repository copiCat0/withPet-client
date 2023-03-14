import React from 'react'
import Logo from 'assets/Logo/petinfoLogo.webp'
import PetInfoButton from 'components/PetInfo/PetInfoButton'
import 'components/App/App.css'

const PetInfo = () => {
  return (
    <div role="pet information group" className="flex flex-col items-center">
      <h2>
        <img src={Logo} alt="Pet Information Logo"></img>
      </h2>
      <form className="flex flex-col">
        <input type="file" accept="img/*" />

        <label className="">
          type
          <input type="text" list="petList" id="petType" name="petType" />
          <datalist id="petList">
            <option value="강아지" />
            <option value="고양이" />
            <option value="쥐" />
            <option value="새" />
            <option value="파충류" />
          </datalist>
        </label>

        <label>
          이름
          <input id="petName" name="petName" type="text" placeholder="이름" />
        </label>

        <label>
          생년월일
          <input id="petBirth" name="petBirth" type="date" />
        </label>

        <label>성별</label>
        <div role="buttonGroup">
          <PetInfoButton id="male">남</PetInfoButton>
          <PetInfoButton id="female">여</PetInfoButton>
        </div>

        <label>중성화 여부</label>
        <div role="buttonGroup">
          <PetInfoButton id="yes">예</PetInfoButton>
          <PetInfoButton id="no">아니오</PetInfoButton>
        </div>

        <input type="submit" value="등록하기" />
      </form>
    </div>
  )
}

export default PetInfo
