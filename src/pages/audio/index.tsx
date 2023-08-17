import React, { useEffect } from 'react'

const AudioPage = () => {
  let audio
  useEffect(() => {
    audio = new Audio(
      'https://peregrine-results.s3.amazonaws.com/pigeon/IwgDgwcDMikxBMqcaO_0.mp3',
    )
  }, [])
  return (
    <div>
      <audio controls>
        <source src="https://peregrine-results.s3.amazonaws.com/pigeon/IwgDgwcDMikxBMqcaO_0.mp3"></source>
      </audio>
      <div>Audio Player</div>
      <button onClick={() => audio.play()}>Play</button>

      <audio controls>
        <source
          src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
          type="audio/ogg"
        ></source>
      </audio>
    </div>
  )
}

export default AudioPage
