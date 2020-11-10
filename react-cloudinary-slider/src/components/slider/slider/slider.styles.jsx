import styled from "styled-components"

import config from '../utils/config.js'

import { Heading, SubHeading } from "../slide/slide.styles"


export const SliderContainer = styled.div`
         position: relative;
         width: 100%;
         height: ${config.slideHeight / 2}px;
         margin: 0 0 60px 0;
         padding: 0;
         overflow: hidden;
         display: flex;
         position: relative;
         align-items: center;

         .active {
           z-index: 10;
           opacity: 1;
         }

         .active div {
           opacity: 1;
         }

         .active div ${Heading} {
           opacity: 1;
           transform: translateY(0%);
         }

         .active div ${SubHeading} {
           opacity: 1;
           transform: scale(1);
         }

         @media (min-width: 768px) {
           height: ${config.slideHeight * 0.75}px;
         }

         @media (min-width: 992px) {
           height: ${config.slideHeight*0.875}px;
         }

         @media (min-width: 1200px) {
           height: ${config.slideHeight}px;
         }
       `

export const ButtonContainer = styled.div`
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  top: 0;
  height: 100%;
  padding: 0 20px 0 20px;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 20px;
  opacity: 0.7;
  border: 0;
  outline: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
    cursor: pointer;
  }
`
