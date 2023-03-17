import React from 'react'
import 'components/App/App.css'

interface GroupProp {
  children: React.ReactNode
  label: string
}

const PetInfoRadioGroup = (props: GroupProp) => {
  const { children, label } = props

  return (
    <fieldset className="my-2">
      <legend className="text-xs decoration-Gray-400 font-semibold">
        {label}
      </legend>
      {children}
    </fieldset>
  )
}

export default PetInfoRadioGroup
