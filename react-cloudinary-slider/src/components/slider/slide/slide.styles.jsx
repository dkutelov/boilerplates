import styled from "styled-components"

import config from '../utils/config.js'

export const SlideContainer = styled.div`
  position: absolute;
  top:0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;
`

export const TextOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  transition: all 2.2s;
  transform: translateY(0%);
  transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1); /* easeInOutExpo */
`

export const Heading = styled.h1`
  font-family: ${config.headingFontName}, sans-serif;
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;
  transition: all 1s;
  text-shadow: 2px 2px 0px #000000;
  transform: scale(0.7);
  margin: 20px 0;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`

export const SubHeading = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 800;
  margin: 0 0 40px 0;
  color: white;
  max-width: 30%;
  transition: all 1s;
  opacity: 0;
  text-shadow: 2px 2px 0px #000000;
  transform: translateY(50%);

  @media (min-width: 576px) {
    line-height: 25px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.1rem;
    line-height: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
`

export const ActionButton = styled.button`
font-size: 18px;
  border: 0;
  background: #fff;
  opacity: 0.8;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    opacity: 1;
  }
`
