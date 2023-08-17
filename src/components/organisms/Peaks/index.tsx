/* eslint-disable no-console */
import React, { useEffect } from 'react'
import Peaks from 'peaks.js'
import { styled } from 'styled-components'

const Box = styled.div`
  #zoomview-container,
  #overview-container {
    width: 1000px;
    height: 100px;
  }
`

const PeaksComponent = () => {
  useEffect(() => {
    const options = {
      zoomview: {
        container: document.getElementById('zoomview-container'),
      },
      overview: {
        container: document.getElementById('overview-container'),
      },
      mediaElement: document.querySelector('audio'),
      webAudio: {
        audioContext: new AudioContext(),
      },
    }
    Peaks.init(options, function (err, peaks) {
      if (err) {
        console.error('Failed to initialize Peaks instance: ' + err.message)
      }
      // Do something when the waveform is displayed and ready
    })
  }, [])

  return (
    <Box>
      <div id="zoomview-container"></div>
      <div id="overview-container"></div>
      <audio>
        <source
          src="https://peregrine-results.s3.amazonaws.com/pigeon/IwgDgwcDMikxBMqcaO_0.mp3"
          type="audio/mpeg"
        />
      </audio>
      <audio>
        <source
          src="https://peregrine-results.s3.amazonaws.com/pigeon/IwgDgwcDMikxBMqcaO_0.mp3"
          type="audio/mpeg"
        />
        <source
          src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
          type='audio/ogg codecs="vorbis"'
        />
      </audio>
    </Box>
  )
}

export default PeaksComponent
