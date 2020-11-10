import styled from "styled-components"

import config from "../utils/config.js"

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: ${config.slideHeight / 2}px;

  @media (min-width: 768px) {
    height: ${config.slideHeight * 0.75}px;
  }

  @media (min-width: 992px) {
    height: ${config.slideHeight * 0.875}px;
  }

  @media (min-width: 1200px) {
    height: ${config.slideHeight}px;
  }
`

export { ImageContainer }