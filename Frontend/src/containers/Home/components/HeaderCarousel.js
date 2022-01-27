import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import '../style.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import { GetAllBlogs ,baseUrl} from '../../../actions/user';


const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  dots: true,
  infinite: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};


function HeaderCarousel() {

  const blogs=[
    'https://cdn.pixabay.com/photo/2022/01/15/02/07/windows-6938478_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/01/10/15/29/wind-mills-6928590_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/12/24/17/14/nature-6891549_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901_960_720.jpg'
  ]

  // const [blogs,setBlogs]=useState([]);
   
  // useEffect(()=>{
  //   GetAllBlogs().then((data)=>{
  //         if(data){
  //             setBlogs(data);
  //         }
  //     })
  // },[]);

  
    return (
        <div className='carouselContainer'>
            <Container className='py-4' fluid>
                <div>
                    <Slider {...settings}>
                        {
                            blogs.map((row)=>(
                                <div className='p-4 '>
                                    <img    src={row}
                                    // src={`${baseUrl}/images/${row.image}`}
                                        style={{ height: '40vh', width: '100%' }}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default HeaderCarousel;
