import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';


const Page5 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productData = [
    {
      id: 1,
      imageUrl: './src/imgs/EASY-RIDER_3.webp',
      imagealt: 'card title',
      title:'EASY RYDER'
    },
    {
      id: 2,
      imageUrl: './src/imgs/PUMA-180OK.WEBP',
      imagealt: 'card title',
      title:'PUMA 18OK'
    },
    {
      id: 3,
      imageUrl: './src/imgs/Carina.webp',
      imagealt: 'card title',
      title:'CARINA'
    },
    {
      id: 4,
      imageUrl: './src/imgs/EASY-RIDER_3.webp',
      imagealt: 'card title',
      title:'EASY RYDER'
    },
    {
      id: 5,
      imageUrl: './src/imgs/PUMA-180OK.WEBP',
      imagealt: 'card title',
      title:'PUMA 18OK'
    },
    {
      id: 6,
      imageUrl: './src/imgs/Carina.webp',
      imagealt: 'card title',
      title:'CARINA'
    },{
      id: 7,
      imageUrl: './src/imgs/EASY-RIDER_3.webp',
      imagealt: 'card title',
      title:'EASY RYDER'
    }
  ]

  const product = productData.map(item => (
    <Card
     key = {item.id} 
     imgSrc={item.imageUrl} 
     imgalt={item.imagealt} 
     title={item.title}/>
  ))





  return (
    <div>
        CARROSEL
        <Carousel responsive={responsive}>
         {product}
        </Carousel>
        
    </div>
  )
}

export default Page5