import React from 'react'
import 'components/App/App.css'

const MyPageEditBtn:React.FC = () => {
  return (
    <div className="relative w-full">
      <button 
      name="editButton"
      type="button"
      className="absolute w-6 h-6 m-2 bg-sprites_icon bg-[left_-1px_top_-401px] right-0 p-2"/>
    </div>
  )
}

export default MyPageEditBtn
