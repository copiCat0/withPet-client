import React from 'react'
import 'components/App/App.css'

type SectionProps = {
  text: string
  children: React.ReactNode
}

const MyPageSection: React.FC<SectionProps> = ({ text, children }) => {
  return (
    <section className="mb-4 flex flex-col justify-center items-center">
      <h3 className="font-bold text-left w-full">{text}</h3>
      {children}
    </section>
  )
}

export default MyPageSection