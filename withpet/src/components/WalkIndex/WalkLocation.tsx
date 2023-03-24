import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
const WalkLocation = () => {
  const loca = useSelector(
    (walkState: RootState) => walkState.walk.walkLocation,
  )

  return (
    <div>
      <p className="mb-20">{`좌표 ${loca.lat},${loca.lng}`}</p>
    </div>
  )
}

export default WalkLocation
