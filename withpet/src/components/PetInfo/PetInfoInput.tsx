import React from 'react'
import 'components/App/App.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: 'text' | 'date' | 'hidden'
  value?: string
  className?: string
  children: string
}

const PetInfoInput = (props: InputProps) => {
  const { id, type, value, className, children, ...rest } = props

  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        id={id}
        type={type}
        value={value}
        className={className}
        {...rest}
      />
    </>
  )
}

export default PetInfoInput
