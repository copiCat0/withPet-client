import React from 'react'
import 'components/App/App.css'

interface GroupProp {
  children: React.ReactNode
  label: string
}

const PetInfoRadioGroup = (props: GroupProp) => {
  const { children, label } = props

  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  )
}

export default PetInfoRadioGroup
