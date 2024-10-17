import React from 'react'
import Spotlight from '../Ui/Spotlight/Spotlight'

function Spotlights() {
  return (
    <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80dvh] w-[50dvw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80dvh] w-[50dvw]' fill="blue" />
    </div>
  )
}

export default Spotlights