import React from 'react'
import 'components/App/App.css'

interface ButtonProp extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string
  name: string
  value: string
}

const PetInfoRadioBtn = (props: ButtonProp) => {
  const { children, name, value, ...rest } = props

  return (
    <label>
      <input type="radio" name={name} value={value} {...rest} />
      {children}
    </label>
  )
}

export default PetInfoRadioBtn
