import React from 'react'

const SelectedPet: React.FC = () => {

  const onFocusPet = (e : any) =>{
    e.stopPropagation()
    console.log(e.target.name)
  }

  return (
    <div>
      <p>반려동물 선택</p>
      <button type="button" name="petName" key="petId" onClick={onFocusPet}>
        <figure className="w-[50px] h-[60px] bg-white flex flex-col justify-center items-center">
          <img
            src="https://media.discordapp.net/attachments/1080393932652945440/1083021952127615068/86a969f151bdf1ed.jpg?width=663&height=663"
            alt="펫 네임"
            className="w-11 h-[38px] object-cover"
          />
          <figcaption className="text-xs">꼬미</figcaption>
        </figure>
      </button>
    </div>
  )
}

export default SelectedPet
