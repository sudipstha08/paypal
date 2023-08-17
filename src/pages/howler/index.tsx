import React, { useEffect } from 'react'
import { Howl, Howler } from 'howler'

const HowlerPage = () => {
  const sound = new Howl({
    src: [
      'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3',
    ],
    sprite: {
      blast: [0, 3000],
      laser: [4000, 1000],
      winner: [6000, 5000],
    },
  })

  useEffect(() => {
    sound.play()
  }, [])
  return (
    <div>
      <button onClick={() => sound?.play()}>Click</button>
      <button onClick={() => sound?.pause()}>Pause</button>
    </div>
  )
}

export default HowlerPage
