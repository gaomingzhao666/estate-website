'use client'

import Carousel from '@/components/ui/carousel'
import outsideImg1 from '@/assets/images/outsideOfHouse/img-1.jpg'
import outsideImg2 from '@/assets/images/outsideOfHouse/img-2.jpg'
import outsideImg3 from '@/assets/images/outsideOfHouse/img-3.jpg'
import outsideImg4 from '@/assets/images/outsideOfHouse/img-4.jpg'
import outsideImg5 from '@/assets/images/outsideOfHouse/img-5.jpg'
import outsideImg6 from '@/assets/images/outsideOfHouse/img-6.jpg'
import outsideImg7 from '@/assets/images/outsideOfHouse/img-7.jpg'
import outsideImg8 from '@/assets/images/outsideOfHouse/img-8.jpg'
import outsideImg9 from '@/assets/images/outsideOfHouse/img-9.jpg'
import outsideImg10 from '@/assets/images/outsideOfHouse/img-10.jpg'
import outsideImg11 from '@/assets/images/outsideOfHouse/img-11.jpg'
import outsideImg12 from '@/assets/images/outsideOfHouse/img-12.jpg'
import outsideImg13 from '@/assets/images/outsideOfHouse/img-13.jpg'
import outsideImg14 from '@/assets/images/outsideOfHouse/img-14.jpg'
import outsideImg15 from '@/assets/images/outsideOfHouse/img-15.jpg'
import outsideImg16 from '@/assets/images/outsideOfHouse/img-16.jpg'

const ImagesCarousel = () => {
  const slideData = [
    {
      src: outsideImg1,
    },
    {
      src: outsideImg2,
    },
    {
      src: outsideImg3,
    },
    {
      src: outsideImg4,
    },
    {
      src: outsideImg5,
    },
    {
      src: outsideImg6,
    },
    {
      src: outsideImg7,
    },
    {
      src: outsideImg8,
    },
    {
      src: outsideImg9,
    },
    {
      src: outsideImg10,
    },
    {
      src: outsideImg11,
    },
    {
      src: outsideImg12,
    },
    {
      src: outsideImg13,
    },
    {
      src: outsideImg14,
    },
    {
      src: outsideImg15,
    },
    {
      src: outsideImg16,
    },
  ]
  return (
    <div className="relative h-full w-full overflow-hidden py-20">
      <h2
        className="mb-8 text-center text-3xl font-semibold"
        id="ハウスの周辺環境"
      >
        ハウスの周辺環境
      </h2>
      <Carousel slides={slideData} />
    </div>
  )
}

export default ImagesCarousel
