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
        'fixed w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center '
      }
    >
      <div
        className={
          'w-11/12 max-w-sm bg-white text-center border border-black shadow-btnShadow '
        }
      >
        <p className={'py-10 font-black'}>{message}</p>
        <div className="py-5">
          {ea === 1 ? (
            <button type={'button'}>{left}</button>
          ) : (
            <>
              <button type={'button'}>{left}</button>
              <button type={'button'}>{right}</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomModal
