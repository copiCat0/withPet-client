import React from 'react'

type ModalProps = {
  message: string
  ea: number
  left: string
  right: string
}

const CustomModal: React.FC<ModalProps> = ({ message, ea, left, right }) => {
  return (
    <div
      className={
        'fixed w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center left-0 '
      }
    >
      <div
        className={
          'w-11/12 max-w-sm bg-white text-center border border-black shadow-btnShadow '
        }
      >
        <p className={'py-10 font-black'}>{message}</p>
        <div>
          {ea === 1 ? (
            <button type={'button'} className={'py-5 border w-full'}>
              {left}
            </button>
          ) : (
            <>
              <button className={'w-1/2 py-5 border'} type={'button'}>
                {left}
              </button>
              <button className={'w-1/2 py-5 border'} type={'button'}>
                {right}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomModal
