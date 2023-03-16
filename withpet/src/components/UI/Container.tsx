import React, { ReactNode } from 'react'

type ContainerProps = {
  bg: string | number
  justify: string
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ bg, children, justify }) => {
  return (
    <main
      className={`h-screen mx-auto max-w-scr p-4 flex ${justify} flex-col ${bg}`}
    >
      {children}
    </main>
  )
}

export default Container

Container.defaultProps = {
  bg: 'bg-primary-100',
}
