import React from 'react'
import 'components/App/App.css'

interface ImgProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  type: 'file'
  accept: string
  children?: string
  className?: string
  tabIndex?: number | undefined
}

const PetInfoImg = (props: ImgProps) => {
  const { id, name, type, accept, children, ...rest } = props

  return (
    <div role="fileBox">
      <label
        htmlFor={id}
        tabIndex={0}  
        className="block bg-white w-28 h-28 mb-3 rounded-full border-2 border-black"
      >
        {children}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        accept={accept}
        className="hidden"
        {...rest}
        required
      />
    </div>
  )
}

export default PetInfoImg
