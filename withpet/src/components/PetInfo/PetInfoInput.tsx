import React from 'react'
import 'components/App/App.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name?: string
  type: 'file' | 'text' | 'date' | 'submit' | 'radio'
  children?: string
  className?: string
}

const PetInfoInput = (props: InputProps) => {
  const { id, name, type, children, ...rest } = props

  return (
    <div
      role="inputGroup"
      className=" flex items-center justify-center w-full"
    >
      <div role="flexBox" className="relative flex items-center justify-between py-2 w-full">
        <label
          htmlFor={id}
          className="absolute h-12 text-xs top-6 left-3 decoration-Gray-400 font-semibold"
        >
          {children}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          className="box-border w-11/12 h-12 text-right px-3 border-2 border-black "
          {...rest}
          required
        />
      </div>
    </div>
  )
}

export default PetInfoInput
