import React from 'react'
import 'components/App/App.css'

interface RegisterProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: string
  value: string
}

const PetInfoRegister = (props: RegisterProps) => {
  const { id, type, value, ...rest } = props

  return (
    <>
      <input id={id} type={type} value={value} {...rest} />
    </>
  )
}

export default PetInfoRegister
