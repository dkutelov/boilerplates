import React from "react"
import { Image, Transformation } from "cloudinary-react"

import { ImageContainer } from "./slide-image.styles"
import config from "../utils/config.js"

const SldeImage = ({ imageUrl }) => {
  const { innerWidth } = window
  return (
    <ImageContainer>
      <Image cloudName={config.cloudinaryCloudName} publicId={imageUrl}>
        <Transformation  dpr="auto" quality="auto" width={innerWidth} gravity="center" crop="fill" />
      </Image>
    </ImageContainer>
  )
}

export default SldeImage
