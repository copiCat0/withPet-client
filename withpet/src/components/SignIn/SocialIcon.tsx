import React from 'react'

type IconProps = {
  method: string
}

const SocialIcon: React.FC<IconProps> = ({ method }) => {
  return (
    <div
      tabIndex={0}
      className={`w-10 h-10 bg-sprites_icon
      ${method === 'kakao' ? 'bg-[left_-11px_top_-326px]' : ''}
      ${method === 'google' ? 'bg-[left_-53px_top_-326px]' : ''}
      ${method === 'facebook' ? 'bg-[left_-95px_top_-326px]' : ''}

    `}
    ></div>
  )
}

export default SocialIcon
