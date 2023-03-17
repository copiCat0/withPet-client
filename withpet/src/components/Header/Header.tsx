import React from 'react'
import headerLogo from 'assets/Logo/headerLogo.webp'

/* type LogoProps = {
  src: string
  alt: string
  width: number
  height: number
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => (
  <img src={src} alt={alt} width={width} height={height} />
)

type HeaderProps = {
  logo: LogoProps
}

const Header: React.FC<HeaderProps> = ({ logo }) => (
  <header className="flex items-center justify-between px-4 py-2 bg-gray-800">
    <div>{logo && <Logo {...logo} />}</div>
  </header>
) */

function Header(): JSX.Element {
  return (
    <header className="w-96 h-14 leading-12 flex flex-row gap-10">
      <img src={headerLogo} alt="logo" />
      <p>withPet</p>
    </header>
  )
}

export default Header
