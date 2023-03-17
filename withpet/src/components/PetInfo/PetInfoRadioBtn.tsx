import React from 'react'
import 'components/App/App.css'

interface ButtonProp extends React.InputHTMLAttributes<HTMLInputElement> {
  children: string
  name: string
  value: string
  tabIndex?: number | undefined
}

const PetInfoRadioBtn = (props: ButtonProp) => {
  const { children, name, value, ...rest } = props

  return (
    <>
      <label tabIndex={0}>
        <input
          type="radio"
          name={name}
          value={value}
          {...rest}
          className="peer hidden"
        />
        <span
          className="w-40 py-3 m-2 inline-block box-border border-2 border-black bg-white text-base text-center font-bold 
          peer-checked:bg-primary-200 peer-checked:text-white peer-checked:shadow-100
          "
        >
          {children}
        </span>
      </label>
    </>
  )
}

export default PetInfoRadioBtn
