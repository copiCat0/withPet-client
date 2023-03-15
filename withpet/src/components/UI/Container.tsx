import React, { ReactNode } from 'react'

type ContainerProps = {
  bg: string | number
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ bg, children }) => {
  return (
    <main className={`h-screen mx-auto max-w-scr p-4 ${bg}`}>{children}</main>
  )
}

export default Container

Container.defaultProps = {
  bg: 'bg-primary-100',
}
