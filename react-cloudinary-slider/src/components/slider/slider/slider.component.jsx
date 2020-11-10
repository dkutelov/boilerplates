import React, { useState } from "react"
import { useInterval } from "../utils/useInterval.js"

import Slide from "../slide/slide.component"
import { sliderData as slides } from "../data/sliderData.js"
import { SliderContainer, ButtonContainer, Button } from "./slider.styles.jsx"

import config from "../utils/config.js"

const Slider = () => {
  const { slideShowDelay, autoSlide } = config
  const [state, setState] = useState({
    slides,
    activeIndex: 0,
    autoSlide,
    interval: slideShowDelay
  })

  useInterval(
    () => {
      setState(prev => ({
        ...prev,
        activeIndex: (prev.activeIndex + 1) % prev.slides.length
      }))
    },
    state.autoSlide ? state.interval : null
  )

  const handlePrevClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex:
        (prev.activeIndex - 1 + prev.slides.length) % prev.slides.length
    }))
  }

  const handleNextClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex: (prev.activeIndex + 1) % prev.slides.length
    }))
  }
  return (
    <SliderContainer>
      {slides.map(({ id, ...otherProps }, i) => (
        <Slide
          key={id}
          slide={otherProps}
          active={state.activeIndex === i}></Slide>
      ))}
      <ButtonContainer style={{ position: "absolute", left: 0 }}>
        <Button onClick={handlePrevClick}>&#9664;</Button>
      </ButtonContainer>
      <ButtonContainer style={{ position: "absolute", right: 0 }}>
        <Button onClick={handleNextClick}>&#9654;</Button>
      </ButtonContainer>
    </SliderContainer>
  )
}

export default Slider
