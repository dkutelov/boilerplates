import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import SlideImage from '../slide-image/slide-image.component'

import {
  SlideContainer,
  TextOverlayContainer,
  Heading,
  SubHeading,
  ActionButton
} from "./slide.styles"

const Slide = ({
  slide: { imageUrl, heading, subHeading, linkUrl, buttonText },
  active
}) => (
  <SlideContainer className={active && "active"}>
    <SlideImage imageUrl={imageUrl}/>
    <TextOverlayContainer>
      {heading && <Heading>{heading}</Heading>}
      {subHeading && <SubHeading>{subHeading}</SubHeading>}
      {buttonText && (
        <Link to={linkUrl}>
          <ActionButton type="button">{buttonText}</ActionButton>
        </Link>
      )}
    </TextOverlayContainer>
  </SlideContainer>
)

Slide.propTypes = {
  slide: PropTypes.object,
  active: PropTypes.bool
}


//<SlideImage imageUrl={imageUrl} height={config.slideHeight} />

export default Slide
