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
      <input
        id={id}
        type={type}
        value={value}
        className="w-full py-3 mt-14 bg-primary-200 text-white font-bold shadow-200"
        {...rest}
      />
    </>
  )
}

export default PetInfoRegister
