import React from 'react'
import 'components/App/App.css'
import Logo from 'assets/Logo/petinfoLogo.webp'
import Container from 'components/UI/Container'
import PetInfoForm from 'components/PetInfo/PetInfoForm'
import PetInfoModifyAndDelete from 'components/PetInfo/PetInfoModifyAndDelete'

const PetInfo: React.FC = () => {
  
  return (
    <Container style={'bg-primary-100 justify-center'}>
        <h2 className="flex justify-center ">
          <img src={Logo} alt="Pet Information Logo" className="w-full"></img>
        </h2>
        <PetInfoForm />
        <PetInfoModifyAndDelete />
    </Container>
  )
}

export default PetInfo
