import React from 'react'
import 'components/App/App.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name?: string
  type: 'file' | 'text' | 'date' | 'radio'
  children?: string
  className?: string
}

const PetInfoInput = (props: InputProps) => {
  const { id, name, type, children, ...rest } = props

  return (
    <div role="inputBox" className="relative py-2 w-full">
      <label
        htmlFor={id}
        className="inline-box absolute h-12 top-6 left-8 text-xs decoration-Gray-400 font-semibold"
      >
        {children}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="inline-box box-border w-full h-12 text-right px-3 border-2 border-black "
        {...rest}
        required
      />
    </div>
  )
}

export default PetInfoInput
