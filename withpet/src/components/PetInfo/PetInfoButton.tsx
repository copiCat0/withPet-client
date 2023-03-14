import React, { useState } from 'react'
import 'components/App/App.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
}

const PetInfoButton = (props: ButtonProps) => {
  const [isCheck, setIsCheck] = useState(false)

  const onToggle = (e: React.MouseEvent<HTMLElement>) => {
    setIsCheck(prev => !prev)
    const value: string = e.currentTarget.id

    return value
  }

  return (
    <>
      {isCheck ? (
        <>
          <button
            type="button"
            {...props}
            onClick={onToggle}
            className="w-40 h-12 m-2  box-border border-2 border-black  inline-block text-base font-bold bg-primary-200 text-white shadow-btnShadow shadow-black"
          />
        </>
      ) : (
        <>
          <button
            type="button"
            {...props}
            onClick={onToggle}
            className=" w-40 h-12 m-2  box-border border-2 border-black bg-white inline-block text-base font-bold"
          />
        </>
      )}
    </>
  )
}

export default PetInfoButton
