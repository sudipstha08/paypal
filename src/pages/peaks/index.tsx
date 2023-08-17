import dynamic from 'next/dynamic'
import React from 'react'

const AudioPlayerComponent = dynamic(
  () => import('../../components/organisms/Peaks/index'),
  {
    ssr: false,
  },
)

const PeaksPage = () => {
  return (
    <div>
      <AudioPlayerComponent />
    </div>
  )
}

export default PeaksPage
