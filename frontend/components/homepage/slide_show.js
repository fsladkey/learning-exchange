import React from 'react'
import Carousel from '../shared/carousel'

export default function SlideShow(props) {
  const imagesUrls = []
  for (let key in window.LearningExchangeStatics) {
    if (key.indexOf("slideshow") !== -1)
      imagesUrls.push(window.LearningExchangeStatics[key])
  }

  const imageItems = imagesUrls.map(imageUrl => {
    return <img key={ imageUrl } src={ imageUrl } />
  })

  return (
    <Carousel>
      { imageItems }
    </Carousel>
  )
}
