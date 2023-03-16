import React from 'react'
import SocialIcon from 'components/SignIn/SocialIcon'

// type SocialProps = {

// }

const SocialLogin =
  // : React.FC<SocialProps>
  () => {
    return (
      <div className="flex justify-center gap-4 my-7">
        <SocialIcon method={'kakao'} />
        <SocialIcon method={'google'} />
        <SocialIcon method={'facebook'} />
      </div>
    )
  }

export default SocialLogin
